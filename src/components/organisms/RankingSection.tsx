// src/components/organisms/RankingSection.tsx
import React from 'react';

const rankings = [
  {
    rank: '#158',
    title: 'Xếp hạng đại học Châu Á',
    subtitle: 'QS World University Rankings: Asia 2026',
  },
  {
    rank: '#301-350',
    title: 'Xếp hạng đại học theo lĩnh vực',
    subtitle: 'QS WUR Rankings by Subject',
  },
  {
    rank: '#325',
    title: 'Xếp hạng đại học phát triển bền vững',
    subtitle: 'QS Sustainability Ranking',
  },
  {
    rank: '#40',
    title: 'Xếp hạng đại học khu vực Đông Nam Á',
    subtitle: 'Asian University Ranking',
  },
  {
    rank: '#401-600',
    title: 'Xếp hạng đại học chỉ số tác động',
    subtitle: 'Impact Ranking',
  },
  {
    rank: '#401-500',
    title: 'Xếp hạng đại học Young University Rankings 2024',
    subtitle: '',
  },
];

const RankingSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003d7c] mb-4">Xếp hạng đại học</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankings.map((ranking, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-[#003d7c]"
            >
              <div className="text-3xl font-bold text-[#003d7c] mb-2">{ranking.rank}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{ranking.title}</h3>
              {ranking.subtitle && (
                <p className="text-sm text-gray-600">{ranking.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingSection;

