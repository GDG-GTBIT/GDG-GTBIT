'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { navItems } from '@/config/site';

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="flex items-center text-background">
        <motion.button
          whileHover={{ rotate: '180deg' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="gdg-transition fixed right-4 top-4 rounded-full bg-foreground p-3 text-3xl text-background md:hidden"
        >
          <FiMenu className="size-5" />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Nav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <motion.nav
      className="fixed bottom-0 top-0 w-screen bg-background"
      animate={isOpen ? 'open' : 'closed'}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="gdg-transition absolute right-8 top-8 rounded-full border-[1px] border-transparent bg-background p-3 text-3xl text-foreground hover:border-primary hover:text-primary"
        whileHover={{ rotate: '180deg' }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX className="size-5" />
      </motion.button>
      <motion.div variants={linkWrapperVariants} className="absolute bottom-8 left-8 flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink key={item.href} text={item.label} href={item.href} />
        ))}
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <motion.a
      className="gdg-transition z-10 inline-block w-fit text-4xl font-black text-foreground hover:text-primary md:text-5xl lg:text-7xl"
      variants={navLinkVariants}
      transition={{
        type: 'spring',
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: '-7.5deg',
      }}
      rel="nofollow"
      href={href}
    >
      {text}
    </motion.a>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1,
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
