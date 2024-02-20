import React from 'react';
import { MdHome } from 'react-icons/md';
import { FaCalendarAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { RxHamburgerMenu } from "react-icons/rx";


const Sidebar = () => {
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
            <div className='sidenar4'>
                {/* <div className='sidebar311'>
                    <RxHamburgerMenu  onClick={toggleSidebar} />
                </div> */}
                <div className='sidebar31'>
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <ul>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={isActive(item.link) ? 'active' : ''}
                        >
                            <Link to={item.link} className='sidebar-link'>
                                <div className='sidebar2'>
                                    {item.icon}
                                </div>
                                <div className='sidebar10'>
                                    {item.text}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
