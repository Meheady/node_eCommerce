<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} Admin</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Scripts -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    <style>
        .transition-width {
            transition: width 0.3s ease-in-out;
        }
    </style>
    <meta name="theme-color" content="#6777ef"/>
    <link rel="apple-touch-icon" href="{{ asset('logo.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">
</head>
<body class="font-sans antialiased" x-data="{ sidebarOpen: true }">
    <div class="flex min-h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside :class="{ 'w-64': sidebarOpen, 'w-20': !sidebarOpen }" class="bg-gray-800 text-white flex-shrink-0 transition-width overflow-x-hidden">
            @include('layouts.sidebar')
        </aside>

        <div class="flex-grow flex flex-col h-screen">
            @include('layouts.navigation')

            <div class="flex-grow overflow-y-auto p-6">
                <!-- Page Heading -->
                @if (isset($header))
                    <header class="bg-white shadow mb-6">
                        <div class="py-6 px-4 sm:px-6 lg:px-8">
                            {{ $header }}
                        </div>
                    </header>
                @endif

                <!-- Page Content -->
                <main>
                    {{ $slot }}
                </main>
            </div>
        </div>
    </div>
    <script src="{{ asset('/js/pwa.js') }}"></script>
</body>
</html>
