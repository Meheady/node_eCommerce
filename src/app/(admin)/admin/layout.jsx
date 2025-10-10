import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function AdminLayout({ children }) {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Header />
                <main style={{ padding: '25px' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}