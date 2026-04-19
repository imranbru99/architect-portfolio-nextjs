import { MetadataRoute } from 'next';
import { getBlogPosts, getPortfolios } from '@/lib/api';

const BASE_URL = 'https://imrandev.bd'; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Define Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/websites',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Fetch Dynamic Blog Slugs
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    blogRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  } catch (e) {
    console.error("Sitemap: Failed to fetch blogs");
  }

  // 3. Fetch Dynamic Portfolio Slugs
  let portfolioRoutes: MetadataRoute.Sitemap = [];
  try {
    const portfolios = await getPortfolios();
    portfolioRoutes = portfolios.map((p) => ({
      url: `${BASE_URL}/portfolio/${p.slug}`,
      lastModified: new Date(p.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Sitemap: Failed to fetch portfolios");
  }

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}