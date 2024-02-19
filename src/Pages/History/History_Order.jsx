import React, { useState } from "react";
import './History.css'
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { useNavigate } from "react-router-dom";



import HOC2 from '../../Components/HOC_second/HOC2'

import img from '../../Images/img82.png'
import img1 from '../../Images/img83.png'


const History_Order = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="historytop">
                <div className="historycontainer">
                    <div className="historyhead">
                        <h2>History</h2>
                    </div>
                    <div className="history5">
                        <div className="history13">
                            <h5>Order ID:  RAC-0987654</h5>

                            <div className="history14">
                                <h6>Order Detail: AC Gas Charging Rs.2500</h6>
                                <p>Name: Loren Epsom</p>
                                <p>Address: 45, Noida Sector 55, Noida, UP</p>
                                <p>Mobile no: 868654644</p>
                                <p>Date:  DD/MM/YYYY  time: 00:00 AM/PM</p>
                                <p>Partner </p>
                                <p>In time: 00:00AM/PM  Exit time: 00:00AM/PM</p>
                            </div>
                        </div>
                        <div className="history15">
                            <div className="history16">
                                <CgNotes size={25} color="#14959C" />
                                <p>payment slip</p>
                            </div>
                            <div className="history17">
                                <button onClick={()=>navigate('/profile')}>Book again</button>
                            </div>
                        </div>
                        <div className="history9">
                            <p>Rate our Partner</p>
                            <div className="history10">
                                <img src={img} alt="" />
                                <img src={img} alt="" />
                                <img src={img} alt="" />
                                <img src={img} alt="" />
                                <img src={img1} alt="" />
                            </div>
                            <div className="history11">
                                <button onClick={()=>navigate('/Cancel_history')}>Submit</button>
                            </div>
                            <div className="history12">
                                <FaRegQuestionCircle size={25} color="#14959C" className="iconhistory" />
                                <p>Help & Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default HOC2(History_Order);
