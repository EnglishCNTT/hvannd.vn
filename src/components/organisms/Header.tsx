// src/components/organisms/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Giới thiệu', href: '#' },
  { name: 'Tuyển sinh', href: '#' },
  { name: 'Đào tạo', href: '#' },
  { name: 'Khoa học công nghệ', href: '#' },
  { name: 'Hợp tác phát triển', href: '#' },
  { name: 'Sinh viên', href: '#' },
  { name: 'Tin tức - Sự kiện', href: '#' },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#003d7c] text-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-10 text-sm">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-semibold">
              ĐẠI HỌC QUỐC GIA HÀ NỘI
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline">
              VNU Mail
            </Link>
            <div className="flex items-center">
              <Link href="#" className="font-bold">VI</Link>
              <span className="mx-1">|</span>
              <Link href="#">EN</Link>
            </div>
            {/* Simple Search Input */}
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="bg-white/20 border-none rounded-md px-2 py-1 text-xs focus:outline-none"
            />
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
      <nav className="bg-[#003d7c]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="py-3">
                <Link href={link.href} className="text-white uppercase font-semibold text-sm hover:bg-white/10 px-3 py-2 rounded-md transition-colors">
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
