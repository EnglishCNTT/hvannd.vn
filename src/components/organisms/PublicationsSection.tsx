'use client';

// src/components/organisms/PublicationsSection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const publications = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+407',
    title: 'Bản tin ĐHQGHN số 407',
    link: '#',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+406',
    title: 'Bản tin ĐHQGHN số 406',
    link: '#',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+405',
    title: 'Bản tin ĐHQGHN số 405',
    link: '#',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+404',
    title: 'Bản tin ĐHQGHN số 404',
    link: '#',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+403',
    title: 'Bản tin ĐHQGHN số 403',
    link: '#',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/400x600/003d7c/ffffff?text=Bản+tin+402',
    title: 'Bản tin ĐHQGHN (số 402)',
    link: '#',
  },
];

const PublicationsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const visiblePublications = publications.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const goToNext = () => {
    setStartIndex((prev) => Math.min(publications.length - itemsPerPage, prev + itemsPerPage));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003d7c] mb-4">Ấn phẩm</h2>
          <p className="text-lg text-gray-600">
            Ấn phẩm của Đại học quốc gia Hà Nội và các đơn vị thành viên, trực thuộc
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visiblePublications.map((publication) => (
              <Link
                key={publication.id}
                href={publication.link}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={publication.image}
                    alt={publication.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-[#003d7c] transition-colors">
                    {publication.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous publications"
          >
            <ChevronLeft className="w-6 h-6 text-[#003d7c]" />
          </button>
          <button
            onClick={goToNext}
            disabled={startIndex + itemsPerPage >= publications.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next publications"
          >
            <ChevronRight className="w-6 h-6 text-[#003d7c]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

