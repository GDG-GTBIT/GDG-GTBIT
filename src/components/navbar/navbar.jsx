import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 z-0 justify-center items-center h-16 w-full">
      <div className="flex bg-blue-50/80 rounded-full shadow-md px-8 py-3 space-x-8 backdrop-blur-sm">
        <a href="#team" className="text-black font-medium hover:text-blue-500">
          TEAM
        </a>
        <a href="#projects" className="text-black font-medium hover:text-blue-500">
          PROJECTS
        </a>
        <a href="#resources" className="text-black font-medium hover:text-blue-500">
          RESOURCES
        </a>
        <a href="#events" className="text-black font-medium hover:text-blue-500">
          EVENTS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
