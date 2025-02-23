import { getRecentBlogs } from '@/actions/get-recent-blogs';
import { HeroSection } from './hero-section';
import React from 'react';
import { BlogCards } from './blog-cards';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogsPage() {
  const blogs = await getRecentBlogs();

  return (
    <React.Fragment>
      <HeroSection />
      <BlogCards blogs={blogs} />
    </React.Fragment>
  );
}
