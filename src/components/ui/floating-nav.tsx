'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggleButton } from './theme-toggle-button';
import { navItems } from '@/config/site';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

interface FloatingNavProps {
  onMobileMenuClick?: () => void;
  className?: string;
}

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export function FloatingNav({ onMobileMenuClick, className = '' }: Readonly<FloatingNavProps>) {
  return (
    <nav
      className={`fixed left-[50%] top-4 z-50 hidden w-fit -translate-x-[50%] items-center gap-6 rounded-full border bg-background/80 px-8 py-3 shadow-md backdrop-blur-sm md:flex ${className}`}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="GDG GTBIT Logo"
          className="h-5 w-auto select-none"
          draggable={false}
          width={50}
          height={50}
        />
      </Link>
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}

      <ThemeToggleButton variant="circle" start="top-right" />

      <button
        onClick={onMobileMenuClick}
        className="gdg-transition fixed right-4 top-4 rounded-full bg-foreground p-4 text-3xl text-background md:hidden"
      >
        <FiMenu />
      </button>
    </nav>
  );
}

const NavLink = ({ children, href }: Readonly<NavLinkProps>) => {
  return (
    <Link href={href} className="block overflow-hidden">
      <motion.div whileHover={{ y: -20 }} transition={{ ease: 'backInOut', duration: 0.5 }} className="h-[20px]">
        <span className="flex h-[20px] items-center text-foreground/90">{children}</span>
        <span className="flex h-[20px] items-center font-semibold text-foreground">{children}</span>
      </motion.div>
    </Link>
  );
};
