<div class="p-4">
    <h1 class="text-2xl font-bold text-white mb-6" :class="{'text-center': !sidebarOpen}">
        <span x-show="sidebarOpen">Admin Panel</span>
        <span x-show="!sidebarOpen">AP</span>
    </h1>
    <nav>
        <ul>
            <li class="mb-4">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center text-gray-300 hover:text-white p-2 rounded-lg" :class="{'justify-start': sidebarOpen, 'justify-center': !sidebarOpen}">
                    <i class="fas fa-tachometer-alt"></i>
                    <span class="ml-4" x-show="sidebarOpen">Dashboard</span>
                </a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.products.index') }}" class="flex items-center text-gray-300 hover:text-white p-2 rounded-lg" :class="{'justify-start': sidebarOpen, 'justify-center': !sidebarOpen}">
                    <i class="fas fa-box"></i>
                    <span class="ml-4" x-show="sidebarOpen">Products</span>
                </a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.categories.index') }}" class="flex items-center text-gray-300 hover:text-white p-2 rounded-lg" :class="{'justify-start': sidebarOpen, 'justify-center': !sidebarOpen}">
                    <i class="fas fa-tags"></i>
                    <span class="ml-4" x-show="sidebarOpen">Categories</span>
                </a>
            </li>
            <li class="mb-4">
                <a href="{{ route('admin.settings.website') }}" class="flex items-center text-gray-300 hover:text-white p-2 rounded-lg" :class="{'justify-start': sidebarOpen, 'justify-center': !sidebarOpen}">
                    <i class="fas fa-cog"></i>
                    <span class="ml-4" x-show="sidebarOpen">Website Settings</span>
                </a>
            </li>
             <li class="mb-4">
                <a href="{{ route('admin.users.index') }}" class="flex items-center text-gray-300 hover:text-white p-2 rounded-lg" :class="{'justify-start': sidebarOpen, 'justify-center': !sidebarOpen}">
                    <i class="fas fa-users"></i>
                    <span class="ml-4" x-show="sidebarOpen">Admins</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
