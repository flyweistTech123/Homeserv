import React from 'react';
import { MdHome } from 'react-icons/md';
import { FaCalendarAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { IoMdClose } from "react-icons/io";



const Sidebar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { icon: <MdHome />, text: 'Home', link: '/home' },
        { icon: <FaCalendarAlt />, text: 'Booking', link: '/bookings' },
        { icon: <FaBagShopping />, text: 'Shopping', link: '/shopping' },
        { icon: <MdOutlineQrCodeScanner />, text: 'Scan QR', link: '/scan' },
        { icon: <IoPerson />, text: 'Profile', link: '/profile' },
    ];

    const isActive = (link) => {
        return location.pathname === link;
    };

    return (
        <div className='sidebar'>
            <div className='sidebar-icons'>
                <IoMdClose className='hamburger-icon' onClick={toggleSidebar} />
                <BsArrowLeft className='arrow-icon' onClick={() => navigate(-1)} />
            </div>
            <ul>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={isActive(item.link) ? 'active' : ''}
                    >
                        <Link to={item.link} className='sidebar-link'>
                            <div className='sidebar-icon'>
                                {item.icon}
                            </div>
                            <div className='sidebar-text'>
                                {item.text}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
