// src/components/organisms/UnitsSection.tsx
import React from 'react';
import Link from 'next/link';

const units = {
  memberUniversities: [
    'Trường Đại học Khoa học Tự nhiên',
    'Trường Đại học Khoa học Xã hội & Nhân văn',
    'Trường Đại học Ngoại ngữ',
    'Trường Đại học Công nghệ',
    'Trường Đại học Kinh tế',
    'Trường Đại học Giáo dục',
    'Trường Đại học Việt Nhật',
    'Trường Đại học Y Dược',
    'Trường Đại học Luật',
  ],
  affiliatedSchools: [
    'Trường Quản trị và Kinh doanh',
    'Trường Quốc tế',
    'Trường Khoa học liên ngành và Nghệ thuật',
  ],
  researchInstitutes: [
    'Viện Vi sinh vật và Công nghệ sinh học',
    'Viện Công nghệ thông tin',
    'Viện Tài nguyên và Môi trường',
    'Viện Việt Nam học và Khoa học phát triển',
    'Viện Trần Nhân Tông',
    'Công viên Công nghệ cao và Đổi mới sáng tạo',
  ],
  serviceUnits: [
    'Ban Quản lý dự án',
    'Ban Quản lý Dự án World Bank',
    'Bệnh viện Đại học Quốc gia Hà Nội',
    'Nhà Xuất bản Đại học Quốc gia Hà Nội',
    'Trung tâm Kiểm định Chất lượng Giáo dục',
    'Trung tâm Quản lý đô thị đại học',
    'Trung tâm Thư viện và Tri thức số',
    'Tạp chí Khoa học',
    'Viện Đào tạo số và Khảo thí',
  ],
};

const UnitsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003d7c] mb-4">
            CÁC ĐƠN VỊ THÀNH VIÊN & TRỰC THUỘC
          </h2>
          <p className="text-xl text-gray-600">
            Đổi mới sáng tạo - Trách nhiệm quốc gia - Phát triển bền vững
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trường đại học thành viên */}
          <div>
            <h3 className="text-xl font-bold text-[#003d7c] mb-4 pb-2 border-b-2 border-[#003d7c]">
              Trường đại học thành viên
            </h3>
            <ul className="space-y-2">
              {units.memberUniversities.map((unit, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-[#003d7c] hover:underline transition-colors text-sm"
                  >
                    {unit}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trường trực thuộc */}
          <div>
            <h3 className="text-xl font-bold text-[#003d7c] mb-4 pb-2 border-b-2 border-[#003d7c]">
              Trường trực thuộc
            </h3>
            <ul className="space-y-2">
              {units.affiliatedSchools.map((unit, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-[#003d7c] hover:underline transition-colors text-sm"
                  >
                    {unit}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Viện nghiên cứu */}
          <div>
            <h3 className="text-xl font-bold text-[#003d7c] mb-4 pb-2 border-b-2 border-[#003d7c]">
              Viện nghiên cứu
            </h3>
            <ul className="space-y-2">
              {units.researchInstitutes.map((unit, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-[#003d7c] hover:underline transition-colors text-sm"
                  >
                    {unit}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Đơn vị phục vụ, dịch vụ */}
          <div>
            <h3 className="text-xl font-bold text-[#003d7c] mb-4 pb-2 border-b-2 border-[#003d7c]">
              Đơn vị phục vụ, dịch vụ
            </h3>
            <ul className="space-y-2">
              {units.serviceUnits.map((unit, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-[#003d7c] hover:underline transition-colors text-sm"
                  >
                    {unit}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;

