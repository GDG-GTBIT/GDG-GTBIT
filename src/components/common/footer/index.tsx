import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#232323]">
            <div className="mx-auto max-w-screen-xl w-full p-4 py-6 lg:py-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-6 md:mb-0 flex items-center">
                        <img
                            src="/Logos/gdgLogo.png"
                            alt="GDG Logo"
                            className="w-[40px] h-[25px] p-1"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-2">GDG GTBIT</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 justify-items-center">
                        <Link href="/team" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Team</Link>
                        <Link href="/resources" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</Link>
                        <Link href="/projects" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Projects</Link>
                        <Link href="/events" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Events</Link>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 GDG GTBIT All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:mt-0 sm:justify-center">
                        {['Instagram', 'LinkedIn', 'Twitter', 'Github', 'Facebook'].map((platform) => (
                            <a
                                key={platform}
                                href={`https://www.${platform.toLowerCase()}.com/gdggtbit`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5"
                            >
                                <Image 
                                    src={`Icons/${platform.toLowerCase()}.svg`} 
                                    alt={platform} 
                                    width={30} 
                                    height={30} 
                                />
                                <span className="sr-only">{platform}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
