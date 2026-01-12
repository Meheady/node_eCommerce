<nav class="bg-white border-b border-gray-100">
    <!-- Primary Navigation Menu -->
    <div class="max-w-12xl mx-auto px-4 sm:px-12 lg:px-12">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Hamburger -->
                <div class="flex items-center mr-4">
                    <button @click="sidebarOpen = !sidebarOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="flex items-center">
                    <h1 class="text-xl font-semibold text-gray-800">Admin Panel</h1>
                </div>
            </div>

            <!-- User Info and Logout -->
            <div class="flex items-center">
                <div class="hidden sm:flex sm:items-center sm:ms-6">
                    <div class="text-gray-500">{{ Auth::user()->name }}</div>
                    <form method="POST" action="{{ route('logout') }}" class="ml-4">
                        @csrf
                        <a href="{{ route('logout') }}"
                           onclick="event.preventDefault(); this.closest('form').submit();"
                           class="text-gray-500 hover:text-gray-700">
                            {{ __('Log Out') }}
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</nav>

