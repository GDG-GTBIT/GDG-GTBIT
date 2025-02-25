import { Beams } from '@/components/beams';
import { GradientGrid } from '@/components/gradient-grid';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative mx-auto flex size-full flex-col items-center justify-center px-4 lg:px-8">
      <Beams />
      <GradientGrid />
      {children}
    </main>
  );
}
