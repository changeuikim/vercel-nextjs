'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (pathnameToCheck: string) => pathname === pathnameToCheck;

  return (
    <nav className="flex justify-start items-center p-8">
      <div className="flex items-center">
        <Link href="/">
          <div
            className={clsx('inline-block font-bold text-black no-underline', {
              'text-gray-500': isActive('/'),
            })}
          >
            Feed
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
