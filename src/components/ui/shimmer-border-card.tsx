'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ShimmerBorderCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  href?: string;
  children?: React.ReactNode;
  target?: string;
}

export function ShimmerBorderCard({
  icon: Icon,
  title,
  description,
  className = '',
  href,
  children,
  target,
}: Readonly<ShimmerBorderCardProps>) {
  const CardContent = () => (
    <div
      className={`group relative mx-auto w-full overflow-hidden rounded-lg bg-card p-0.5 transition-all duration-500 hover:bg-card/50 ${className}`}
    >
      <div className="relative z-10 flex flex-col overflow-hidden rounded-[7px] bg-background p-8 transition-all duration-500 group-hover:bg-card">
        {Icon ?? null}

        {children || (
          <>
            {title && <h4 className="gdg-transition relative z-10 mb-4 text-3xl font-bold text-foreground">{title}</h4>}
            {description && <p className="gdg-transition relative z-10 text-muted-foreground">{description}</p>}
          </>
        )}
      </div>

      <motion.div
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'linear',
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary/50 via-primary/0 to-primary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={target} className="block w-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
