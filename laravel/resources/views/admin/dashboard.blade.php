<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="sm:px-12 lg:px-12">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <h3 class="text-2xl font-bold">Welcome to the Admin Panel!</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div class="bg-blue-500 text-white p-6 rounded-lg">
                            <h4 class="text-lg font-semibold">Total Products</h4>
                            <p class="text-3xl font-bold">{{ $totalProducts }}</p>
                        </div>
                        <div class="bg-green-500 text-white p-6 rounded-lg">
                            <h4 class="text-lg font-semibold">Total Categories</h4>
                            <p class="text-3xl font-bold">{{ $totalCategories }}</p>
                        </div>
                        <div class="bg-purple-500 text-white p-6 rounded-lg">
                            <h4 class="text-lg font-semibold">Total Users</h4>
                            <p class="text-3xl font-bold">{{ $totalUsers }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
