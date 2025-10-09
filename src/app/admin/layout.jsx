import Sidebar from '@/components/Sidebar';

export default function AdminLayout({ children }) {
    return (
        <div className="d-flex">
            <Sidebar />
            <main className="flex-grow-1 p-3">
                {children}
            </main>
        </div>
    );
}