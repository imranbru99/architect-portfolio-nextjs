// lib/api.ts

export type Portfolio = {
  id?: number;
  title: string;
  slug: string;
  meta?: string | null;
  keyword?: string | null;
  description?: string | null;
  image?: string | null;
  demo_image?: string | null;
  created_at?: string;
  status?: number | boolean | string | null;
};

interface LaravelResponse<T> {
  status: string;
  data: T;
  message?: string;
}

const API_BASE = "https://sub.domain.com";

/**
 * Fetch all portfolios.
 * Cached for 24 hours (86,400 seconds).
 */
export async function getPortfolios(): Promise<Portfolio[]> {
  const res = await fetch(`${API_BASE}/all`, {
    next: { 
      revalidate: 86400 // Cache for exactly 24 hours
    }
  });

  if (!res.ok) throw new Error("Failed to fetch portfolios");

  const response: LaravelResponse<Portfolio[]> = await res.json();
  
  return response.data.map(item => ({
    ...item,
    demo_image: item.demo_image || item.image 
  }));
}

/**
 * Fetch a single portfolio by slug.
 * Cached for 1 week (604,800 seconds).
 */
// Replace just the getPortfolioBySlug function in lib/api.ts

export async function getPortfolioBySlug(slug: string, retries = 3): Promise<Portfolio | null> {
  const url = `${API_BASE}/portfolios/${slug}`;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "Accept": "application/json"
        },
        next: { 
          revalidate: 604800 // Cache for 1 week
        }
      });

      // 1. Success! Return the data immediately.
      if (res.ok) {
        const response: LaravelResponse<Portfolio> = await res.json();
        return response.data;
      }

      // 2. If it's a 404 Not Found, don't retry. It just doesn't exist.
      if (res.status === 404) {
        return null; 
      }

      // 3. If it's a server error (500), log it and let the loop try again.
      console.warn(`Attempt ${attempt} failed for ${url}. Status: ${res.status}`);
      
    } catch (error) {
      // Catch network errors (API down, DNS issues)
      console.warn(`Attempt ${attempt} network error for ${url}.`);
    }

    // Wait 1.5 seconds before trying again (unless it's the last attempt)
    if (attempt < retries) {
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }

  // If we reach here, all 3 attempts failed. 
  // Return null instead of throwing an error so the app doesn't crash!
  console.error(`All ${retries} attempts failed for ${url}. Returning null safely.`);
  return null;
}

// lib/api.ts

/**
 * Fetch all blogs with 3-5 background retries
 */
export async function getBlogPosts(retries = 3): Promise<BlogPost[]> {
  const url = "https://sub.domain.com/blog/all";
  
  for (let i = 1; i <= retries; i++) {
    try {
      const res = await fetch(url, { next: { revalidate: 604800 } });
      if (res.ok) {
        const response = await res.json();
        return response.data;
      }
    } catch (e) {
      console.warn(`All Blogs Load Attempt ${i} failed`);
    }
    if (i < retries) await new Promise(r => setTimeout(r, 1000));
  }
  return []; // Return empty array on total failure
}

/**
 * Fetch single blog with 3-5 background retries
 */
export async function getBlogPostBySlug(slug: string, retries = 3): Promise<BlogPost | null> {
  const url = `https://sub.domain.com/blog/${slug}`;
  
  for (let i = 1; i <= retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { "Accept": "application/json" },
        next: { revalidate: 604800 }
      });
      if (res.ok) {
        const response = await res.json();
        return response.data;
      }
      if (res.status === 404) return null;
    } catch (e) {
      console.warn(`Single Blog Load Attempt ${i} failed`);
    }
    if (i < retries) await new Promise(r => setTimeout(r, 1000));
  }
  return null; // Return null on total failure
}