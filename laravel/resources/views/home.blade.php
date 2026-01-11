<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MB-TECH</title>
    <link rel="icon" href="{{ $logo }}">
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
    </style>
</head>
<body>
    <div id="app" class="container-web">
        <div class="stars-background">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
        <header class="fixed-header">
            <div class="logo-section">
                <div class="logo">
                    <img class="logo-image" src="{{ $logo }}" alt="MB TECH Logo"/>
                    <div class="logo-text">
                        MB-TECH
                        <div class="contact-info">
                            <a href="tel:+351920292617" class="btn btn-sm btn-primary me-2">
                                <i class="fas fa-phone"></i> +351 920292617
                            </a>
                            <a href="https://wa.me/351920292617" target="_blank" rel="noopener noreferrer" class="btn btn-sm whatsapp-btn">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="search-section">
                <div class="search-bar">
                    <input type="text" id="keyword-search" placeholder="Keyword Search" class="keyword-search" value="">
                    <button class="search-button"><i class="fas fa-search"></i></button>
                </div>
            </div>

            <div class="category-tabs">
                @foreach ($categories as $category)
                    <button data-category="{{ $category->name }}"
                       class="tab-button {{ $activeCategory == $category->name ? 'active' : '' }}">
                        {{ $category->name }}
                    </button>
                @endforeach
            </div>
        </header>

        <main class="item-list-container">
            <div class="item-list">
                @include('partials.product_list', ['products' => $products])
            </div>
        </main>

        <footer class="page-footer">
            Developed By :
            <a href="https://wa.me/8801988701570" target="_blank" class="dev-link">DevOrbit</a>
        </footer>
    </div>

    <div id="install-dialog" class="dialog-container" style="display: none;">
        <div class="dialog">
            <h3 class="dialog-title">Install App</h3>
            <p>Install this application on your device for a better experience.</p>
            <div class="dialog-buttons">
                <button id="install-button-dialog" class="dialog-button">Install</button>
                <button id="close-button-dialog" class="dialog-button-secondary">Close</button>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('keyword-search');
            const categoryTabs = document.querySelectorAll('.tab-button');
            const productListContainer = document.querySelector('.item-list');

            let activeCategory = '{{ $activeCategory }}';

            function fetchProducts() {
                const searchTerm = searchInput.value;
                const url = `{{ route('filter') }}?category=${encodeURIComponent(activeCategory)}&search=${encodeURIComponent(searchTerm)}`;

                fetch(url, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                })
                .then(response => response.text())
                .then(html => {
                    productListContainer.innerHTML = html;
                })
                .catch(error => console.error('Error fetching products:', error));
            }

            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    activeCategory = tab.dataset.category;
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    searchInput.value = ''; // Reset search on tab change
                    fetchProducts();
                });
            });

            searchInput.addEventListener('input', () => {
                // Debounce search input
                setTimeout(fetchProducts, 300);
            });
        });
    </script>
</body>
</html>