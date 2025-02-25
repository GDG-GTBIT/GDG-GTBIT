import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="rounded-3xl bg-accent p-8 text-center text-foreground md:p-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="aspect-square w-48 rounded-full bg-muted md:w-56"></div>

        <div className="font-['Pixelify_Sans'] text-xl md:text-3xl lg:text-4xl">
          <h3>
            No sleep, all caffeine, and bugs are plot twists! <br />
            Break, build, repeat and rule tech!
          </h3>
        </div>
      </div>

      <footer className="mt-12 w-full text-base">
        <div className="mb-8 flex justify-center gap-6">
          <a href="https://www.instagram.com" className="gdg-transition hover:scale-110">
            <Image src="/gdg.png" alt="GDG Logo" width={40} height={40} className="size-10" />
          </a>
          <a href="https://www.instagram.com" className="gdg-transition hover:scale-110">
            <Image src="/gdg.png" alt="GDG Logo" width={40} height={40} className="size-10" />
          </a>
          <a href="https://www.instagram.com" className="gdg-transition hover:scale-110">
            <Image src="/gdg.png" alt="GDG Logo" width={40} height={40} className="size-10" />
          </a>
          <a href="https://www.instagram.com" className="gdg-transition hover:scale-110">
            <Image src="/gdg.png" alt="GDG Logo" width={40} height={40} className="size-10" />
          </a>
        </div>

        <p className="text-sm md:text-base">Made with ❤️ by GDG-GTBIT</p>
        <p className="text-sm md:text-base">Copyright &copy;2025, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
