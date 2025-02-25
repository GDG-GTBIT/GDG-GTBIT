'use server';

import ky from 'ky';

/**
 * Recent blog response from the API
 * 
 * @param title - title of the blog
 * @param subtitle - subtitle of the blog
 * @param url - url of the blog (including search params)
 * @param publication_time - relative publication time of the blog, e.g. "1 hour ago"
 */
export type RecentBlogResponse = {
    title: string;
    subtitle: string;
    url: string;
    publication_time: string;
}

/**
 * Recent blog response from the API
 * 
 * @param title - title of the blog
 * @param subtitle - subtitle of the blog
 * @param url - url of the blog (not including search params)
 * @param publicationTime - relative publication time of the blog, e.g. "1 hour ago"
 */
export type RecentBlog = {
    title: string;
    subtitle: string;
    url: string;
    publicationTime: string;
}

/**
 * Get recent blogs posted on medium.com
 * 
 * @returns Array of recent blogs posted on medium.com
 */
export async function getRecentBlogs(): Promise<RecentBlog[]> {
    const response = await ky.get(`${process.env.MEDIUM_SCRAPER_URL}/scrape/gdg.gtbit`).json<{ posts: RecentBlogResponse[] }>();
    return response.posts.map((blog) => ({
        title: blog.title,
        subtitle: blog.subtitle,
        url: blog.url.split('?')[0] ?? blog.url,
        publicationTime: blog.publication_time
    }));
}
