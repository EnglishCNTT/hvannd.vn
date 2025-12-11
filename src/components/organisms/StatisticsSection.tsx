// src/components/organisms/StatisticsSection.tsx
import React from 'react';

const statistics = [
  {
    number: '25',
    label: 'Đơn vị VNU member',
    icon: '🏛️',
  },
  {
    number: '2.100+',
    label: 'Sản phẩm KH&CN "2024" S&T products',
    icon: '🔬',
  },
  {
    number: '483',
    label: 'Chương trình đào tạo Education Program',
    icon: '📚',
  },
  {
    number: '213',
    label: 'Phòng thí nghiệm Laboratories',
    icon: '🧪',
  },
  {
    number: '2.921',
    label: 'Cán bộ khoa học Staff',
    icon: '👥',
  },
  {
    number: '58',
    label: 'Giải thưởng Awards',
    icon: '🏆',
  },
  {
    number: '45',
    label: 'Nhóm nghiên cứu mạnh Strong research groups',
    icon: '🔍',
  },
  {
    number: '555',
    label: 'Giáo sư, Phó Giáo sư Professor',
    icon: '👨‍🏫',
  },
  {
    number: '309',
    label: 'Huy chương Olympic Quốc tế & Khu vực International & Regional Olympiad Medals',
    icon: '🥇',
  },
];

const StatisticsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#003d7c] to-[#0056b3] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            ĐẠI HỌC QUỐC GIA HÀ NỘI QUA NHỮNG CON SỐ
          </h2>
          <p className="text-xl text-white/90">
            Những con số nổi bật của Đại Học Quốc Gia Hà Nội
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2 text-yellow-300">{stat.number}</div>
              <div className="text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

