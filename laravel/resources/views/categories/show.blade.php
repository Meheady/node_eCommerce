<x-guest-layout>
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold mb-4">{{ $category->name }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @foreach ($category->products as $product)
                <a href="{{ route('products.show', $product->id) }}" class="block bg-white shadow-md rounded-lg p-4">
                    <div class="p-4">
                        <h2 class="text-lg font-semibold">{{ $product->name }}</h2>
                        <p class="text-gray-600">${{ $product->price }}</p>
                    </div>
                </a>
            @endforeach
        </div>
    </div>
</x-guest-layout>
