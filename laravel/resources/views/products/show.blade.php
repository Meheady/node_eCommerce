<x-guest-layout>
    <div class="container mx-auto px-4">
        <div class="bg-white shadow-md rounded-lg p-4">
            <div class="p-4">
                <h1 class="text-2xl font-bold">{{ $product->name }}</h1>
                <p class="text-gray-700 mt-2">{{ $product->description }}</p>
                <p class="text-lg font-semibold text-gray-800 mt-4">${{ $product->price }}</p>
                <p class="text-sm text-gray-600">In stock: {{ $product->stock }}</p>
            </div>
        </div>
    </div>
</x-guest-layout>
