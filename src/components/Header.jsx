"use client"
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const Header = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <header style={headerStyle}>
            <div className="d-flex justify-content-end">
                <Nav>
                    <NavDropdown
                        title={<PersonCircle size={28} color={isHovered ? '#007bff' : '#212529'} />}
                        id="basic-nav-dropdown"
                        align="end"
                        className="me-3 no-arrow"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <NavDropdown.Item as={Link} href="/admin/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
    position: 'relative',
};

export default Header;
