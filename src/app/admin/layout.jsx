"use client";

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { SessionProvider } from 'next-auth/react';

export default function AdminLayout({ children }) {
    return (
        <SessionProvider>
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1">
                    <Header />
                    <main style={{ padding: '25px' }}>
                        {children}
                    </main>
                </div>
            </div>
        </SessionProvider>
    );
}