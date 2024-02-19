import React, { useState } from "react";
import './History.css'
import { FaRegQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import HOC2 from '../../Components/HOC_second/HOC2'


const Shoppingl_history = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="historytop">
                <div className="historycontainer1">
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
                            </div>
                        </div>
                        <div className="history15">
                            <div className="history16">
                            
                            </div>
                            <div className="history17">
                                <button  onClick={()=>navigate('/profile')}>Book again</button>
                            </div>
                        </div>
                        <div className="history18">
                            <div className="history19">
                                <FaRegQuestionCircle size={25} color="#FCA001" className="iconhistory" />
                                <p>Help & Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HOC2(Shoppingl_history);
