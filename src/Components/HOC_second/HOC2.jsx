import React, { useState } from "react";
import './HOC2.css'
import Sidebar from "../Sidebar/Sidebar";
import Upperbar from "../Upperbar/Upperbar";

const HOC2 = (WrappedComponent) => {
    const Component = () => {
        const [show, setShow] = useState(true);
        const toggleSidebar = () => {
            setShow(!show);
        };

        return (
            <div className={`container1 ${show ? '' : 'sidebar-hidden'}`}>
                {show && (
                    <div className="sidebar">
                        <Sidebar toggleSidebar={toggleSidebar} />
                    </div>
                )}
                <div className="content">
                    <Upperbar show={show} toggleSidebar={toggleSidebar} />
                    <div className="child-component">
                        <WrappedComponent  />
                    </div>
                </div>
            </div>
        );
    };

    return Component;
};

export default HOC2;
