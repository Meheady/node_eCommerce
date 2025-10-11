"use client";

import { useState } from "react";
import Image from "next/image";
import '../../public/website.css';
const allItems = [
  {
    id: 1,
    name: "IPHONE 11G 2019 BLACK - INCELL",
    price: 13,
    stock: 69,
    inStock: true,
    category: "Lcd's",
    image:
        "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "IPHONE 11G 2019 INCELL - EXCELLENT QUALITY",
    price: 17,
    stock: 0,
    inStock: false,
    category: "Lcd's",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLWl-C2qkJuFJp0m7dnz1yXDWF7VTuoPyTg&s",
  },
  {
    id: 3,
    name: "SAMSUNG A05S NF",
    price: 12,
    stock: 45,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 4,
    name: "SAMSUNG A14 / A145P/A145R NF",
    price: 10,
    stock: 40,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 5,
    name: "IPHONE X INCEL",
    price: 15,
    stock: 35,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 6,
    name: "SAMSUNG A54 5G OEM",
    price: 22,
    stock: 28,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 7,
    name: "HUAWEI P30 LITE",
    price: 18,
    stock: 52,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 8,
    name: "XIAOMI REDMI NOTE 10 PRO",
    price: 25,
    stock: 15,
    inStock: true,
    category: "Lcd's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 9,
    name: "ONEPLUS 8 PRO",
    price: 30,
    stock: 10,
    inStock: true,
    category: "Mobile's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 10,
    name: "GOOGLE PIXEL 6",
    price: 35,
    stock: 8,
    inStock: true,
    category: "Mobile's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 11,
    name: "LG WING 5G",
    price: 40,
    stock: 5,
    inStock: true,
    category: "Mobile's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 12,
    name: "IPHONE 12 PRO MAX",
    price: 50,
    stock: 20,
    inStock: true,
    category: "Mobile's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 13,
    name: "SAMSUNG GALAXY S21 ULTRA",
    price: 45,
    stock: 18,
    inStock: true,
    category: "Mobile's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 14,
    name: "HUAWEI MATE 40 PRO",
    price: 42,
    stock: 12,
    inStock: true,
    category: "Laptop's",
    image: "https://via.placeholder.com/45",
  },
  {
    id: 15,
    name: "XIAOMI 11 LITE",
    price: 28,
    stock: 30,
    inStock: true,
    category: "Laptop's",
    image: "https://via.placeholder.com/45",
  },
];

const categories = ["Lcd's", "Mobile's", "Laptop's", "Nokia"];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Lcd's");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = allItems.filter((item) => {
    const categoryMatch = item.category === activeTab;
    const searchMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
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
                  Dial:{" "}
                  <a href="tel:+351920282747" className="phone-number">
                    +351 920 282 747
                  </a>{" "}
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
                    key={category}
                    className={`tab-button ${activeTab === category ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(category);
                      setSearchTerm(""); // Reset search on tab change
                    }}
                >
                  {category}
                </button>
            ))}
          </div>
        </header>

        <main className="item-list-container">
          <div className="item-list">
            {filteredItems.map((item) => (
                <div className="list-item" key={item.id}>
                  <Image
                      className="item-image"
                      src={item.image}
                      alt={item.name}
                      width={45}
                      height={45}
                      unoptimized={item.image.startsWith("data:image")} // for base64 images
                  />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                  </div>
                  <div className="item-price-stock">
                    <div className="item-price">€{item.price}</div>
                    {item.inStock ? (
                        <div className="item-stock">In Stock : {item.stock}</div>
                    ) : (
                        <div className="item-stock restocking">Restocking Soon</div>
                    )}
                  </div>
                </div>
            ))}
          </div>
        </main>

        <footer className="page-footer">
          Developed By :{" "}
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