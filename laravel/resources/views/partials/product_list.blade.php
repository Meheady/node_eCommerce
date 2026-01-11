@forelse ($products as $product)
    <a href="#" class="list-item">

        <img class="item-image" src="{{ asset('storage/' . $product->thumbnail) }}" alt="{{ $product->name }}" width="45" height="45">
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
    </a>
@empty
    <div class="no-items-found">
        <h3>No items found</h3>
        <p>Please try a different category or search term.</p>
    </div>
@endforelse
