// src/components/organisms/NewsSection.tsx
import React from 'react';
import NewsCard from '../molecules/NewsCard';

const placeholderNews = [
  {
    imageUrl: 'https://vnu.edu.vn/upload/2024/05/29/22_29_01_290524_vnu-hn.jpg',
    category: 'Sự kiện nổi bật',
    title: 'ĐHQGHN vào top 401-600 thế giới ở 6 lĩnh vực theo Bảng xếp hạng THE WUR by Subject 2024',
    date: '29/05/2024',
  },
  {
    imageUrl: 'https://vnu.edu.vn/upload/2024/05/28/16_28_40_280524_a-nh-chu-p-cu-ng-le-be-gia-ng-nha-m-ho-c-2023-2024.jpg',
    category: 'Hoạt động',
    title: 'Trường Đại học Ngoại ngữ, ĐHQGHN tưng bừng Lễ Bế giảng và trao bằng tốt nghiệp năm 2024',
    date: '28/05/2024',
  },
  {
    imageUrl: 'https://vnu.edu.vn/upload/2024/05/27/10_27_05_270524_a-nh-1.jpg',
    category: 'Tuyển sinh',
    title: 'Hơn 4.000 thí sinh tham gia kỳ thi HSA đợt 405 và 406 tại 9 địa điểm thi trên cả nước',
    date: '27/05/2024',
  },
   {
    imageUrl: 'https://vnu.edu.vn/upload/2024/05/26/22_26_46_260524_qs-subjects-2024.jpg',
    category: 'Xếp hạng',
    title: 'ĐHQGHN tiếp tục giữ vững vị trí số 1 Việt Nam với 10 lĩnh vực được xếp hạng theo QS WUR by Subject 2024',
    date: '26/05/2024',
  },
];

const NewsSection = () => {
  const featuredNews = placeholderNews[0];
  const otherNews = placeholderNews.slice(1, 4);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#003d7c]">Tin tức & Sự kiện</h2>
          <p className="text-gray-600 mt-2">Cập nhật những thông tin mới nhất từ VNU</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <NewsCard {...featuredNews} isFeatured />
          </div>

          {/* Other News */}
          <div className="space-y-8">
            {otherNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default NewsSection;
