
"use client"
import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { House, BoxSeam, List, ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} style={{ backgroundColor: '#343a40', color: 'white', minHeight: '100vh', padding: '20px' }}>
            <div className="sidebar-header" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Admin Panel</h4>
                <button onClick={toggleSidebar} className="btn btn-dark">
                    {isCollapsed ? <ChevronRight /> : <ChevronDown />}
                </button>
            </div>
            <Nav className="flex-column">
                <Nav.Link href="/admin" style={{ color: 'white' }}><House /> {!isCollapsed && 'Dashboard'}</Nav.Link>
                <NavDropdown title={<><List /> {!isCollapsed && 'Categories'}</>} id="nav-dropdown-categories">
                    <NavDropdown.Item href="/admin/categories">All</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/categories/new">Add New</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<><BoxSeam /> {!isCollapsed && 'Products'}</>} id="nav-dropdown-products">
                    <NavDropdown.Item href="/admin/products">All</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/products/new">Add New</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    );
};

export default Sidebar;
