/** @format */
import React from "react";
import './HOC.css'
import Sidebar from "../Sidebar/Sidebar";
// import Upperbar from "../Upperbar/Upperbar";

const HOC = (WrappedComponent) => {
    const Component = () => (
        <div className="container1">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">
                {/* <Upperbar /> */}
                <div className="child-component1">
                    <WrappedComponent />
                </div>
            </div>
        </div>
    );

    return Component;
};

export default HOC;



// <div style={{ backgroundColor: "#f2f3f8" }}>
// <Navbar hamb={hamb} setHamb={setHamb} setShow={setShow} show={show}/>
// </div>

// <section className="component_style">
// <Sidebar hamb={hamb} setHamb={setHamb} show={show} />
// <div className={show ? "child_component" : "child_component_full"} >
//   {" "}
//   <Wcomponenet />
// </div>
// </section>
