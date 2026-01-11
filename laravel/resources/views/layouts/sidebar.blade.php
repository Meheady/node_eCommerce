<div class="p-4">
    <h1 class="text-2xl font-bold text-white mb-6">Admin Panel</h1>
    <nav>
        <ul>
            <li class="mb-4">
                <a href="{{ route('admin.dashboard') }}" class="text-gray-300 hover:text-white">Dashboard</a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.products.index') }}" class="text-gray-300 hover:text-white">Products</a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.categories.index') }}" class="text-gray-300 hover:text-white">Categories</a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.settings.website') }}" class="text-gray-300 hover:text-white">Website Settings</a>
            </li>
             <li class="mb-4">
                <a href="{{ route('admin.users.index') }}" class="text-gray-300 hover:text-white">Admins</a>
            </li>
        </ul>
    </nav>
</div>
