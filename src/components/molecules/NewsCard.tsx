// src/components/molecules/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  imageUrl: string;
  category: string;
  title: string;
  date: string;
  isFeatured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, category, title, date, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <div className="group col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
        <Link href="#">
          <div className="relative">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={450}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-white bg-[#003d7c] px-2 py-1 text-sm font-semibold rounded">{category}</span>
              <h3 className="text-white text-2xl font-bold mt-2 leading-tight">
                {title}
              </h3>
               <p className="text-gray-300 text-sm mt-2">{date}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
      <Link href="#">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={225}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <span className="text-[#003d7c] text-xs font-semibold">{category}</span>
          <h3 className="font-bold text-gray-800 mt-1 leading-tight h-16 overflow-hidden">
            {title}
          </h3>
          <p className="text-gray-500 text-xs mt-2">{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
