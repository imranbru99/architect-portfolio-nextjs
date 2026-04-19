import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidatePath('/blog');
  revalidatePath('/blog/[slug]', 'page');
  return NextResponse.json({ revalidated: true, now: Date.now() });
}