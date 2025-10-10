
"use client"
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { House, BoxSeam, List, ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
        if (isCollapsed) {
            setOpenSubmenu(null);
        }
    };

    const handleSubmenuClick = (submenu) => {
        setOpenSubmenu(openSubmenu === submenu ? null : submenu);
    };

    const navLinkHoverStyle = {
        backgroundColor: '#495057',
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} style={sidebarStyle(isCollapsed)}>
            <div className="sidebar-header" style={sidebarHeaderStyle}>
                {!isCollapsed && <h4 style={{ color: '#f8f9fa' }}>Admin Panel</h4>}
                <button onClick={toggleSidebar} className="btn btn-dark" style={{ color: '#f8f9fa' }}>
                    {isCollapsed ? <ChevronRight /> : <ChevronDown />}
                </button>
            </div>
            <Nav className="flex-column">
                <Nav.Link
                    as={Link}
                    href="/admin"
                    style={hoveredLink === 'dashboard' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle}
                    onMouseEnter={() => setHoveredLink('dashboard')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <House size={20} /> {!isCollapsed && <span style={navLinkTextStyle}>Dashboard</span>}
                </Nav.Link>

                <div>
                    <Nav.Link
                        onClick={() => handleSubmenuClick('categories')}
                        style={hoveredLink === 'categories' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle}
                        onMouseEnter={() => setHoveredLink('categories')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <List size={20} /> {!isCollapsed && <span style={navLinkTextStyle}>Categories</span>}
                        {!isCollapsed && (openSubmenu === 'categories' ? <ChevronDown style={submenuIconStyle} /> : <ChevronRight style={submenuIconStyle} />)}
                    </Nav.Link>
                    {!isCollapsed && openSubmenu === 'categories' && (
                        <div style={submenuStyle}>
                            <Nav.Link
                                as={Link}
                                href="/admin/categories"
                                style={hoveredLink === 'categories-all' ? { ...submenuLinkStyle, ...navLinkHoverStyle } : submenuLinkStyle}
                                onMouseEnter={() => setHoveredLink('categories-all')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >All</Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/admin/categories/new"
                                style={hoveredLink === 'categories-new' ? { ...submenuLinkStyle, ...navLinkHoverStyle } : submenuLinkStyle}
                                onMouseEnter={() => setHoveredLink('categories-new')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >Add New</Nav.Link>
                        </div>
                    )}
                </div>

                <div>
                    <Nav.Link
                        onClick={() => handleSubmenuClick('products')}
                        style={hoveredLink === 'products' ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle}
                        onMouseEnter={() => setHoveredLink('products')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <BoxSeam size={20} /> {!isCollapsed && <span style={navLinkTextStyle}>Products</span>}
                        {!isCollapsed && (openSubmenu === 'products' ? <ChevronDown style={submenuIconStyle} /> : <ChevronRight style={submenuIconStyle} />)}
                    </Nav.Link>
                    {!isCollapsed && openSubmenu === 'products' && (
                        <div style={submenuStyle}>
                            <Nav.Link
                                as={Link}
                                href="/admin/products"
                                style={hoveredLink === 'products-all' ? { ...submenuLinkStyle, ...navLinkHoverStyle } : submenuLinkStyle}
                                onMouseEnter={() => setHoveredLink('products-all')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >All</Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/admin/products/new"
                                style={hoveredLink === 'products-new' ? { ...submenuLinkStyle, ...navLinkHoverStyle } : submenuLinkStyle}
                                onMouseEnter={() => setHoveredLink('products-new')}
                                onMouseLeave={() => setHoveredLink(null)}
                            >Add New</Nav.Link>
                        </div>
                    )}
                </div>
            </Nav>
        </div>
    );
};

const sidebarStyle = (isCollapsed) => ({
    backgroundColor: '#212529',
    color: 'white',
    minHeight: '100vh',
    padding: '20px',
    transition: 'width 0.3s',
    width: isCollapsed ? '80px' : '250px',
});

const sidebarHeaderStyle = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const navLinkStyle = {
    color: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
};

const navLinkTextStyle = {
    marginLeft: '15px',
};

const submenuStyle = {
    backgroundColor: '#343a40',
    borderRadius: '5px',
    marginTop: '-10px',
    marginBottom: '10px',
    padding: '10px 0'
};

const submenuLinkStyle = {
    color: '#ced4da',
    padding: '8px 45px',
    cursor: 'pointer',
};

const submenuIconStyle = {
    marginLeft: 'auto',
};

export default Sidebar;
