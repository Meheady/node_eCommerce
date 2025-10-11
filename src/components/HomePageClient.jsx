'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../public/website.css';

export default function HomePageClient({ initialAllItems, initialCategories }) {
  const [activeTab, setActiveTab] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState(initialAllItems);
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    if (initialCategories.length > 0) {
      setActiveTab(initialCategories[0].name);
    }
  }, [initialCategories]);

  const filteredItems = allItems.filter((item) => {
    const categoryMatch = item.category.name === activeTab;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      <header className="fixed-header">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-initials">
              <span>MB</span>
              <span className="logo-tech">TECH</span>
            </div>
            <div className="logo-text">
              Price List
              <div className="contact-info">
                Dial:{' '}
                <a href="tel:+351920282747" className="phone-number">
                  +351 920 282 747
                </a>{' '}
                to verify <br />
                availability (if Quantity less than 3)
              </div>
            </div>
          </div>
        </div>

        <div className="search-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Keyword Search"
              className="keyword-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === category.name ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(category.name);
                setSearchTerm(''); // Reset search on tab change
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </header>

      <main className="item-list-container">
        <div className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="list-item" key={item.id}>
                <Image
                  className="item-image"
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name}
                  width={45}
                  height={45}
                  unoptimized={item.image && item.image.startsWith('data:image')} // for base64 images
                />
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                </div>
                <div className="item-price-stock">
                  <div className="item-price">€{item.price}</div>
                  {item.stock > 0 ? (
                    <div className="item-stock">In Stock : {item.stock}</div>
                  ) : (
                    <div className="item-stock restocking">Restocking Soon</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-items-found">
              <h2>No items found</h2>
              <p>Please try a different category or search term.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="page-footer">
        Developed By:{' '}
        <a
          href="https://wa.me/8801988701570"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-link"
        >
          DevOrbit
        </a>
      </footer>
    </>
  );
}
