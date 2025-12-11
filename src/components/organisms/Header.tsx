'use client';

// src/components/organisms/Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Giới thiệu',
    href: '#',
    submenu: [
      { name: 'Tổng quan', href: '#' },
      { name: 'Lịch sử', href: '#' },
      { name: 'Sứ mạng - Tầm nhìn', href: '#' },
      { name: 'Chiến lược phát triển', href: '#' },
      { name: 'Cơ cấu tổ chức', href: '#' },
      { name: 'Văn bản pháp quy', href: '#' },
    ],
  },
  {
    name: 'Đào tạo',
    href: '#',
    submenu: [
      { name: 'Giới thiệu chung', href: '#' },
      { name: 'Chương trình đào tạo bậc đại học', href: '#' },
      { name: 'Chương trình đào tạo thạc sĩ', href: '#' },
      { name: 'Chương trình đào tạo tiến sĩ', href: '#' },
      { name: 'Chương trình đào tạo liên kết', href: '#' },
    ],
  },
  {
    name: 'Khoa học công nghệ',
    href: '#',
    submenu: [
      { name: 'Giới thiệu chung', href: '#' },
      { name: 'Hoạt động Khoa học - Công nghệ', href: '#' },
      { name: 'Chương trình, dự án, đề tài', href: '#' },
      { name: 'Hệ thống phòng thí nghiệm', href: '#' },
      { name: 'Giải thưởng Khoa học - Công nghệ', href: '#' },
    ],
  },
  {
    name: 'Hợp tác & phát triển',
    href: '#',
    submenu: [
      { name: 'Giới thiệu chung', href: '#' },
      { name: 'Hợp tác quốc tế', href: '#' },
      { name: 'Hợp tác trong nước', href: '#' },
    ],
  },
  {
    name: 'Sinh viên',
    href: '#',
    submenu: [
      { name: 'Học bổng', href: '#' },
      { name: 'Hỗ trợ sinh viên', href: '#' },
      { name: 'Chương trình trao đổi sinh viên', href: '#' },
      { name: 'Cựu sinh viên', href: '#' },
    ],
  },
  {
    name: 'Cán bộ',
    href: '#',
  },
];

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#003d7c] text-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-10 text-sm">
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline">Thư viện số</Link>
            <Link href="#" className="hover:underline">VNU Office</Link>
            <Link href="#" className="hover:underline">E-mail</Link>
            <Link href="#" className="hover:underline">Sitemap</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Link href="#" className="font-bold">VI</Link>
              <span className="mx-1">|</span>
              <Link href="#">EN</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo */}
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://vnu.edu.vn/storage/photos/1/LOGO-VNU-TV-02.png"
              alt="VNU Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-[#003d7c]">ĐẠI HỌC QUỐC GIA HÀ NỘI</h1>
            <p className="text-sm text-gray-600">VNU - Vietnam National University, Hanoi</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-[#003d7c] relative">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="text-white uppercase font-semibold text-sm hover:bg-white/10 px-4 py-3 block transition-colors"
                >
                  {link.name}
                </Link>
                {link.submenu && activeSubmenu === link.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[250px] py-2 z-50">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#003d7c] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
