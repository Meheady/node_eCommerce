<x-guest-layout>
    <div class="container mx-auto px-4">
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Categories</h2>
            <ul class="flex flex-wrap gap-4">
                @foreach ($categories as $category)
                    <li>
                        <a href="{{ route('categories.show', $category->id) }}" class="text-blue-500 hover:underline">{{ $category->name }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @foreach ($products as $product)
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
