import React, { useState } from 'react';
import { MdHome } from 'react-icons/md';
import { FaCalendarAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";


import './Sidebar.css'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const navItems = [
        { icon: <MdHome />, text: 'Home' },
        { icon: <FaCalendarAlt />, text: 'Booking' },
        { icon: <FaBagShopping />, text: 'Shopping' },
        { icon: <MdOutlineQrCodeScanner />, text: 'Scan QR' },
        { icon: <IoPerson />, text: 'Profile' },
    ];

    return (
        <div className='sidebar'>
            <div className='sidenar4'>

                <div className='sidebar3'>
                <BsArrowLeft />
                </div>
                <ul>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={activeLink === index ? 'active' : ''}
                            onClick={() => handleLinkClick(index)}
                        >
                            <div className='sidebar2'>
                                {item.icon}
                            </div>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
