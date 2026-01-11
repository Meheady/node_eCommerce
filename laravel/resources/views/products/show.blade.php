<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $product->name }} - MB-TECH</title>
    @include('layouts.partials.head-assets')
    <style>
        :root {
            --vh: 100vh;
        }
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden; /* Prevent scrolling on the body */
        }
        .product-detail-container {
            color: #e0e0e0;
            padding: 20px;
            flex-grow: 1;
            overflow-y: auto;
        }
        .product-main {
            display: flex;
            gap: 20px;
            margin-bottom: 40px;
        }
        .product-main img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #1a358a;
        }
        .product-info {
            flex-grow: 1;
        }
        .product-info h1 {
            font-size: 2.5rem;
            margin-top: 0;
            margin-bottom: 10px;
        }
        .product-info .price {
            font-size: 2rem;
            color: #1890ff;
            margin-bottom: 20px;
        }
        .product-info .stock {
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        .product-info .description {
            font-size: 1rem;
            line-height: 1.6;
        }
        .related-products h2 {
            font-size: 1.8rem;
            border-bottom: 2px solid #1a358a;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .related-products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
        }
        .related-product-item {
            background-color: unset;
            backdrop-filter: blur(2px);
            border: 1px solid #1a358a;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            text-decoration: none;
            color: #e0e0e0;
            transition: transform 0.2s;
        }
        .related-product-item:hover {
            transform: translateY(-5px);
        }
        .related-product-item img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: #1890ff;
            text-decoration: none;
            font-size: 1rem;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container-web">
        <div class="stars-background">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>

        <main class="product-detail-container">
            <a href="{{ url('/') }}" class="back-link"><i class="fas fa-arrow-left"></i> Back to Home</a>

            <div class="product-main">
                <img src="{{ $product->thumbnail ? asset('storage/' . $product->thumbnail) : '/placeholder.jpg' }}" alt="{{ $product->name }}">
                <div class="product-info">
                    <h1>{{ $product->name }}</h1>
                    <div class="price">€{{ $product->price }}</div>
                    <div class="stock">
                        @if ($product->stock > 0)
                            <span style="color: #4caf50;">In Stock: {{ $product->stock }}</span>
                        @else
                            <span style="color: #f44336;">Restocking Soon</span>
                        @endif
                    </div>
                    <div class="description">
                        {!! nl2br(e($product->description)) !!}
                    </div>
                </div>
            </div>

            @if($relatedProducts->count() > 0)
            <div class="related-products">
                <h2>Related Products</h2>
                <div class="related-products-grid">
                    @foreach($relatedProducts as $related)
                        <a href="{{ route('products.show', $related) }}" class="related-product-item">
                            <img src="{{ $related->thumbnail ? asset('storage/' . $related->thumbnail) : '/placeholder.jpg' }}" alt="{{ $related->name }}">
                            <h3>{{ $related->name }}</h3>
                            <p>€{{ $related->price }}</p>
                        </a>
                    @endforeach
                </div>
            </div>
            @endif
        </main>

        <footer class="page-footer">
            Developed By :
            <a href="https://wa.me/8801988701570" target="_blank" class="dev-link">DevOrbit</a>
        </footer>
    </div>
</body>
</html>