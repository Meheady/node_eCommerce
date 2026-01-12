'use client';

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import '../../public/website.css';

export default function HomePageClient({ initialAllItems, initialCategories, logo }) {
  const [activeTab, setActiveTab] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState(initialAllItems);
  const [categories, setCategories] = useState(initialCategories);
  const deferredPrompt = useRef(null);

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


  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      const installDialog = document.getElementById('install-dialog');
      if (installDialog) {
        installDialog.style.display = 'flex';
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);


    const installDialog = document.getElementById('install-dialog');
    const installButton = document.getElementById('install-button-dialog');
    const closeButton = document.getElementById('close-button-dialog');

    const handleInstallClick = () => {
      if (deferredPrompt.current) {
        deferredPrompt.current.prompt();
        deferredPrompt.current.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt.current = null;
        });
      }
      if (installDialog) {
        installDialog.style.display = 'none';
      }
    }

    if (installButton) {
      installButton.addEventListener('click', handleInstallClick);
    }

    const handleCloseClick = () => {
      if (installDialog) {
        installDialog.style.display = 'none';
      }
    }

    if (closeButton) {
      closeButton.addEventListener('click', handleCloseClick);
    }

    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    setVh();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      if (installButton) {
        installButton.removeEventListener('click', handleInstallClick);
      }
      if (closeButton) {
        closeButton.removeEventListener('click', handleCloseClick);
      }
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    }
  }, []);

  return (
      <>
        <head>
          <link rel="icon" href={logo}/>
        </head>

          <div className="container-web">
            <div className="stars-background">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
            <header className="fixed-header">
              <div className="logo-section">
                <div className="logo">
                  <img className="logo-image" src={logo} alt="MB TECH Logo"/>
                  <div className="logo-text">
                    MB-TECH
                    <div className="contact-info">
                      <a href="tel:+351920292617" className="btn btn-sm btn-primary me-2">
                        <i className="fas fa-phone"></i> +351 920292617
                      </a>
                      <a
                          href="https://wa.me/351920292617"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm whatsapp-btn "
                      >
                        <i className="fab fa-whatsapp"></i> WhatsApp
                      </a>
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
                              src={item.thumbnail || '/placeholder.jpg'}
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
                      <h3>No items found</h3>
                      <p>Please try a different category or search term.</p>
                    </div>
                )}
              </div>
            </main>

            <footer className="page-footer">
              Developed By :
              <a
                  href="https://wa.me/8801988701570"
                  target="_blank"
                  className="dev-link"
              >
                DevOrbit
              </a>
            </footer>

        </div>


        <div
            id="install-dialog"
            className="dialog-container"
            style={{display: 'none'}}
        >
          <div className="dialog">
            <h3 className="dialog-title">Install App</h3>
            <p>Install this application on your device for a better experience.</p>
            <div className="dialog-buttons">
              <button id="install-button-dialog" className="dialog-button">
                Install
              </button>
              <button
                  id="close-button-dialog"
                  className="dialog-button-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
  );
}
