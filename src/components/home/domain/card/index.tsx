import Link from 'next/link';
import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
}

const ResourceCard = ({ title, description }: ResourceCardProps) => {
  return (
    <div className="bg-[#232323] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between h-full w-[375px]">
      <Link href={`/domain/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h3 className="text-2xl font-semibold text-white mb-4 cursor-pointer hover:text-gray-300 transition-colors">
          {title}
        </h3>
      </Link>

      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      <div className="mt-auto">
        <p className="text-sm text-gray-500 italic">Explore more</p>
      </div>
    </div>
  );
};

export default ResourceCard;
