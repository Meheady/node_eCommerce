"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

export default function ConditionalHeaderFooter({ children }) {
  const pathname = usePathname();
  const isAdminPanel = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPanel && <Navbar />}
      {children}
      {!isAdminPanel && <Footer />}
    </>
  );
}
