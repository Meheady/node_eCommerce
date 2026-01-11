@forelse ($products as $product)
    <div class="list-item">
        <img class="item-image" src="{{ $product->thumbnail ? asset('storage/' . $product->thumbnail) : '/placeholder.jpg' }}" alt="{{ $product->name }}" width="45" height="45">
        <div class="item-details">
            <div class="item-name">{{ $product->name }}</div>
        </div>
        <div class="item-price-stock">
            <div class="item-price">€{{ $product->price }}</div>
            @if ($product->stock > 0)
                <div class="item-stock">In Stock : {{ $product->stock }}</div>
            @else
                <div class="item-stock restocking">Restocking Soon</div>
            @endif
        </div>
    </div>
@empty
    <div class="no-items-found">
        <h3>No items found</h3>
        <p>Please try a different category or search term.</p>
    </div>
@endforelse
