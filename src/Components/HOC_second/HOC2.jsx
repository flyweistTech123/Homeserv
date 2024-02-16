/** @format */

import React from "react";
import './HOC2.css'
import Sidebar from "../Sidebar/Sidebar";
import Upperbar from "../Upperbar/Upperbar";

const HOC2 = (Wcomponenet) => {

    return function Component() {
        return (
            <>
                <div className="container1">
                    <div className="sidebarhoc">
                        <Sidebar />
                    </div>
                    <div className="content">
                        <Upperbar />
                        <div className="child_component">
                            <Wcomponenet />
                        </div>
                    </div>
                </div>

            </>
        );
    };
};

export default HOC2;


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
