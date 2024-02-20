import React from "react";
import './HOC2.css'
import Sidebar from "../Sidebar/Sidebar";
import Upperbar from "../Upperbar/Upperbar";

const HOC2 = (WrappedComponent) => {
    const Component = () => (
        <div className="container1">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">
                <Upperbar />
                <div className="child-component">
                    <WrappedComponent />
                </div>
            </div>
        </div>
    );

    return Component;
};

export default HOC2;
