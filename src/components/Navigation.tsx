'use client';

import { Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigationItems = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Properties', href: '/properties', current: false },
  { name: 'Tenants', href: '/tenants', current: false },
  { name: 'Leases', href: '/leases', current: false },
  { name: 'Maintenance', href: '/maintenance', current: false },
  { name: 'Reports', href: '/reports', current: false },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/comarca_logo.png" alt="Comarca" width={32} height={32} />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`pb-4 ${
                    isActive
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
            <div className="h-8 w-8 bg-orange-400 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 