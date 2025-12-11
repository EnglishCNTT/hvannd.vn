// src/components/organisms/CooperationSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cooperationNews = [
  {
    id: 1,
    image: 'https://vnu.edu.vn/upload/2024/05/20/10_20_05_200524_a-nh-1.jpg',
    title: 'Thúc đẩy hoàn thiện Hiệp định liên Chính phủ Việt Nam - Nhật Bản, tạo động lực phát triển mạnh mẽ cho VJU',
    link: '#',
  },
  {
    id: 2,
    image: 'https://vnu.edu.vn/upload/2024/05/18/16_18_05_180524_a-nh-1.jpg',
    title: 'ĐHQGHN và RANEPA hợp tác đào tạo, nghiên cứu và nâng cao năng lực quản trị địa phương',
    link: '#',
  },
  {
    id: 3,
    image: 'https://vnu.edu.vn/upload/2024/05/15/10_15_05_150524_a-nh-1.jpg',
    title: 'ĐHQGHN phối hợp Học viện Tổng thống Liên bang Nga khai giảng Chương trình bồi dưỡng "Chuyển đổi số trong quản lý hành chính công"',
    link: '#',
  },
];

const CooperationSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003d7c] mb-4">Hợp tác - Phát triển</h2>
          <p className="text-xl text-gray-600">
            Kết nối tri thức và các giá trị, kiến tạo tương lai bền vững!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cooperationNews.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#003d7c] transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;

