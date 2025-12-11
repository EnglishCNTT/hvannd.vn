// src/components/organisms/Hero.tsx
import React from 'react';

const Hero = () => {
  const heroImageUrl = 'https://vnu.edu.vn/storage/photos/1/Slide-29.jpg';

  return (
    <section className="relative w-full h-[500px] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImageUrl}')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-bold max-w-2xl leading-tight">
          VNU - Nơi hội tụ của tri thức và tương lai
        </h2>
        <p className="mt-4 text-lg max-w-2xl">
          Khám phá môi trường học tập và nghiên cứu hàng đầu Việt Nam.
        </p>
      </div>
    </section>
  );
};

export default Hero;
