'use client';

// src/components/organisms/NewsCarousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    image: 'https://vnu.edu.vn/upload/2024/05/29/22_29_01_290524_vnu-hn.jpg',
    title: 'Hơn 2.000 thí sinh tham gia Kỳ thi Olympic bậc THPT của ĐHQGHN năm học 2025–2026 (Olympic VNU)',
    link: '#',
  },
  {
    id: 2,
    image: 'https://vnu.edu.vn/upload/2024/05/28/16_28_40_280524_a-nh-chu-p-cu-ng-le-be-gia-ng-nha-m-ho-c-2023-2024.jpg',
    title: 'Điểm chuẩn (điểm trúng tuyển) đại học chính quy năm 2025',
    link: '#',
  },
  {
    id: 3,
    image: 'https://vnu.edu.vn/upload/2024/05/27/10_27_05_270524_a-nh-1.jpg',
    title: 'Hàng ngàn thí sinh tham gia tư vấn tuyển sinh trực tiếp tại 21 gian hàng của ĐHQGHN',
    link: '#',
  },
  {
    id: 4,
    image: 'https://vnu.edu.vn/upload/2024/05/26/22_26_46_260524_qs-subjects-2024.jpg',
    title: 'Phân vị tương đương giữa điểm thi đánh giá năng lực (HSA) và tổ hợp điểm thi tốt nghiệp THPT A00, B00, C00, D01 năm 2025',
    link: '#',
  },
  {
    id: 5,
    image: 'https://vnu.edu.vn/upload/2024/05/25/10_25_05_250524_a-nh-1.jpg',
    title: 'ĐHQGHN công bố ngưỡng đảm bảo chất lượng đầu vào đại học chính quy năm 2025',
    link: '#',
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="container mx-auto">
                  <Link href={item.link}>
                    <h2 className="text-3xl font-bold mb-4 hover:underline max-w-4xl">
                      {item.title}
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsCarousel;

