import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaBars } from "react-icons/fa";
import { sidebarData } from './sidebarData';
import './Sidebar.scss';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/auth/login");
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="sidebar-toggle btn btn-dark d-lg-none"
                onClick={toggleSidebar}
            >
                <FaBars />
            </button>

            <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
                <Nav className="sidebar__nav">
                    {sidebarData.map((item, index) => (
                        <Nav.Link 
                            key={index}
                            href={item.path} 
                            className="sidebar__nav-item"
                        >
                            {item.icon && <item.icon className="sidebar__nav-icon" />}
                            {item.label}
                        </Nav.Link>
                    ))}
                </Nav>

                <Nav className="sidebar__footer">
                    <Nav.Link 
                        href="#" 
                        className="sidebar__nav-item" 
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="sidebar__nav-icon" />
                        Logout
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;