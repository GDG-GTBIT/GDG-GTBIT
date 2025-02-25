import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="min-h-screen py-10 text-center text-foreground">
      <div className="mx-auto mb-8 h-48 w-48 rounded-full bg-muted">
        <Image src="/logo.png" alt="GDG GTBIT Logo" width={40} height={40} className="size-10" />
      </div>

      <div className="mx-auto">
        <h1 className="text-4xl font-bold md:text-6xl">
          Sign up to receive updates for <br />
          the latest event announcements
        </h1>
      </div>

      <div className="mx-auto mt-8 flex max-w-md items-center rounded-full bg-card px-6 py-3 shadow-md">
        <input
          type="email"
          placeholder="Enter your e-mail address"
          className="flex-grow bg-transparent text-base text-card-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button className="rounded-full p-2 text-foreground hover:bg-muted">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </button>
      </div>

      <footer className="absolute bottom-0 w-full rounded-t-3xl bg-accent p-6 text-center text-accent-foreground">
        <p className="text-2xl">Made with ❤️ by GDG-GTBIT</p>
        <p className="text-lg">Copyright &copy;2025, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Header;
