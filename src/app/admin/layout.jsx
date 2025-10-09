
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <nav>
          <ul>
            <li>
              <Link href="/admin" className="block py-2 px-4 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="block py-2 px-4 hover:bg-gray-700">
                Products
              </Link>
            </li>
            <li>
              <Link href="/admin/categories" className="block py-2 px-4 hover:bg-gray-700">
                Categories
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Welcome, Admin!</h2>
          </div>
          <div>
            <button className="bg-red-500 text-white p-2 rounded-md">Logout</button>
          </div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
