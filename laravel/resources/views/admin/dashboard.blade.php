<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-blue-100 p-4 rounded-lg">
                            <h3 class="text-lg font-semibold">Total Products</h3>
                            <p class="text-3xl">{{ $totalProducts }}</p>
                        </div>
                        <div class="bg-green-100 p-4 rounded-lg">
                            <h3 class="text-lg font-semibold">Total Categories</h3>
                            <p class="text-3xl">{{ $totalCategories }}</p>
                        </div>
                        <div class="bg-yellow-100 p-4 rounded-lg">
                            <h3 class="text-lg font-semibold">Total Users</h3>
                            <p class="text-3xl">{{ $totalUsers }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
