// src/components/organisms/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#002b55] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Contact */}
          <div className="space-y-4">
            <Image
              src="https://vnu.edu.vn/storage/photos/1/LOGO-VNU-TV-02.png"
              alt="VNU Logo"
              width={60}
              height={60}
            />
            <h3 className="font-bold text-lg">ĐẠI HỌC QUỐC GIA HÀ NỘI</h3>
            <p className="text-sm text-gray-300">
              Địa chỉ: 144 Xuân Thủy, Cầu Giấy, Hà Nội
              <br />
              Điện thoại: (024) 3754 7670
              <br />
              Email: vanphong@vnu.edu.vn
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-2">
            <h4 className="font-bold mb-4">Về ĐHQGHN</h4>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Sơ đồ trang</Link>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Chính sách bảo mật</Link>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Phản hồi, góp ý</Link>
          </div>

          {/* Column 3: More Links */}
          <div className="space-y-2">
            <h4 className="font-bold mb-4">Kết nối</h4>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Facebook</Link>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Youtube</Link>
            <Link href="#" className="block text-sm text-gray-300 hover:underline">Twitter</Link>
          </div>

          {/* Column 4: Map */}
           <div>
             <h4 className="font-bold mb-4">Bản đồ</h4>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981186423!2d105.7827252153255!3d21.03813279284201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab497cb7375b%3A0x49352e3583d7398a!2zMTQ0IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678886568803!5m2!1svi!2s" 
                width="100%" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
           </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Bản quyền thuộc về Đại học Quốc gia Hà Nội.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
