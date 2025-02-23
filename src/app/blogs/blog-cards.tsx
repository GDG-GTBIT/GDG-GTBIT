'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ShimmerBorderCard } from '@/components/ui/shimmer-border-card';
import { RecentBlog } from '@/actions/get-recent-blogs';
import { motion } from 'framer-motion';

export function BlogCards({ blogs }: Readonly<{ blogs: RecentBlog[] }>) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(2px)',
    },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <div className="max-w-6xl py-16 sm:py-24" id="blogs">
      <motion.div className="flex flex-col space-y-6" variants={containerVariants} initial="hidden" animate="show">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.url}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            custom={index}
          >
            <ShimmerBorderCard href={blog.url} target="_blank" className="group border border-primary/10">
              <div className="flex flex-col items-start justify-start gap-8 md:flex-row md:justify-between">
                <div className="flex flex-col">
                  <h3 className="gdg-transition text-xl font-semibold leading-tight text-card-foreground group-hover:text-primary">
                    {blog.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-muted-foreground">{blog.subtitle}</p>
                  <div className="mt-6 flex items-center text-sm text-muted-foreground">
                    <span>{blog.publicationTime}</span>
                    <ArrowRight className="gdg-transition ml-2 size-4 group-hover:-rotate-45 group-hover:scale-105 group-hover:text-primary" />
                  </div>
                </div>
                <Image
                  src="/blog2.png"
                  alt={`Blog icon for ${blog.title}`}
                  width={500}
                  height={300}
                  draggable={false}
                  className="hidden h-32 w-auto select-none hue-rotate-15 md:block"
                />
              </div>
            </ShimmerBorderCard>
          </motion.div>
        ))}
      </motion.div>

      {blogs.length === 0 && (
        <div className="text-center">
          <p className="text-muted-foreground">No blogs found at the moment. Check back later!</p>
        </div>
      )}
    </div>
  );
}
