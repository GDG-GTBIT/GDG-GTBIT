'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { ButtonProps } from '@/components/ui/button';

export const HeroSection = () => {
  return <Content />;
};

const Content = () => {
  return (
    <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-24 md:px-8 md:pt-36">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <GlowingChip>Our Blogs Are Now Live 🎉</GlowingChip>
      </motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: 'easeInOut',
        }}
        className="font-host-grotesk leading-tighter my-4 text-center text-3xl tracking-tight text-foreground sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl"
      >
        Read our blogs to <br />
        <span className="font-semibold">learn</span>, <span className="font-semibold">grow</span>, and{' '}
        <span className="font-semibold">thrive</span>.
      </motion.h1>
      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        className="mb-9 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg md:leading-relaxed"
      >
        Make sure to check out all of our blogs given below to learn, grow, and thrive. We will be posting new blogs
        regularly.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <Link href="/blogs#blogs">
          <SplashButton className="flex items-center gap-2">
            Read our blogs
            <FiArrowRight />
          </SplashButton>
        </Link>
        <Link href="https://medium.com/@gdg.gtbit" target="_blank">
          <GhostButton className="rounded-md px-4 py-2 text-foreground">Learn more</GhostButton>
        </Link>
      </motion.div>
    </div>
  );
};

const GlowingChip = ({ children }: { children: string }) => {
  return (
    <span className="relative z-10 mb-4 inline-block rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground md:mb-0">
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-muted-foreground/0 via-primary/50 to-muted-foreground/0" />
    </span>
  );
};

const SplashButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-md bg-gradient-to-br from-primary to-primary px-4 py-2 text-primary-foreground ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-primary/70',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const GhostButton = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'rounded-md px-4 py-2 text-foreground transition-all hover:scale-[1.02] hover:bg-muted hover:text-foreground active:scale-[0.98]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
