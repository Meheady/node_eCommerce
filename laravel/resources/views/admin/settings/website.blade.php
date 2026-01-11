<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Website Settings') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <h3 class="text-2xl font-bold mb-6">Manage Website Settings</h3>

                    @if (session('success'))
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span class="block sm:inline">{{ session('success') }}</span>
                        </div>
                    @endif

                    <form action="{{ route('admin.settings.website.update') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        
                        <div class="mb-4">
                            <label for="site_name" class="block text-gray-700 text-sm font-bold mb-2">Site Name:</label>
                            <input type="text" name="site_name" id="site_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="{{ $settings['site_name'] ?? '' }}">
                        </div>

                        <div class="mb-4">
                            <label for="site_email" class="block text-gray-700 text-sm font-bold mb-2">Contact Email:</label>
                            <input type="email" name="site_email" id="site_email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="{{ $settings['site_email'] ?? '' }}">
                        </div>

                        <div class="mb-4">
                            <label for="footer_text" class="block text-gray-700 text-sm font-bold mb-2">Footer Text:</label>
                            <textarea name="footer_text" id="footer_text" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{{ $settings['footer_text'] ?? '' }}</textarea>
                        </div>

                        <div class="mb-4">
                            <label for="logo" class="block text-gray-700 text-sm font-bold mb-2">Logo:</label>
                            <input type="file" name="logo" id="logo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            @if (isset($settings['logo']))
                                <div class="mt-4">
                                    <p class="font-semibold">Current Logo:</p>
                                    <img src="{{ asset('storage/' . $settings['logo']) }}" alt="Website Logo" class="w-32 h-auto object-contain rounded">
                                </div>
                            @endif
                        </div>

                        <div class="flex items-center justify-between">
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
