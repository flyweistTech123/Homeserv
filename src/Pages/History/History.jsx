import React, { useState } from "react";
import './History.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import HOC2 from '../../Components/HOC_second/HOC2'

import img from '../../Images/img82.png'
import img1 from '../../Images/img83.png'


const History = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate()

    return (
        <>
        <div className="historytop">
        <div className="historycontainer">
            <div className="historyhead">
                <h2>History</h2>
            </div>
            <div className="history">
                <div className="history1">
                    <div className="history2">
                        <div
                            className={step === 0 ? "history3" : "history4"}
                            onClick={() => setStep(0)}
                        >
                            <p>Service Order</p>
                        </div>

                    </div>
                    <div className="history2">
                        <div
                            className={step === 1 ? "history3" : "history4"}
                            onClick={() => setStep(1)}
                        >
                            <p>Shopping Order</p>
                        </div>
                    </div>
                </div>
            </div>

            {step === 0 ? (
                <div className="history5">
                    <div className="history55">
                        <div className="history6">
                            <div className="history7">
                                <h6>Order ID:  RAC-0987654</h6>
                                <p>Order Type: AC Repair Service</p>
                                <p>Date:  2nd Feb 2023  10:30 AM  </p>
                            </div>
                            <div className="history8">
                                <span>Cancelled</span>
                                <IoIosArrowForward color="#14959C" size={25} />
                            </div>
                        </div>

                        <div className="history6">
                            <div className="history7">
                                <h6>Order ID:  RAC-0987654</h6>
                                <p>Order Type: AC Repair Service</p>
                                <p>Date:  2nd Feb 2023  10:30 AM  </p>
                            </div>
                            <div className="history8">
                                <span style={{ color: "#006471" }}>Confirmed</span>
                                <IoIosArrowForward color="#14959C" size={25} />
                            </div>
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
                            <button  onClick={()=>navigate('/Servce_history')}>Submit</button>
                        </div>
                        <div className="history12">
                            <FaRegQuestionCircle size={25} color="#14959C" className="iconhistory" />
                            <p>Help & Support</p>
                        </div>
                    </div>
                </div>
            ) : step === 1 ? (
                <div className="history5">
                    <div className="history55">
                        <div className="history6">
                            <div className="history7">
                                <h6>Order ID:  RAC-0987654</h6>
                                <p>Order Type: AC Repair Service</p>
                                <p>Date:  2nd Feb 2023  10:30 AM  </p>
                            </div>
                            <div className="history8">
                                <span>Cancelled</span>
                                <IoIosArrowForward color="#14959C" size={25} />
                            </div>
                        </div>

                        <div className="history6">
                            <div className="history7">
                                <h6>Order ID:  RAC-0987654</h6>
                                <p>Order Type: AC Repair Service</p>
                                <p>Date:  2nd Feb 2023  10:30 AM  </p>
                            </div>
                            <div className="history8">
                                <span style={{ color: "#006471" }}>Confirmed</span>
                                <IoIosArrowForward color="#14959C" size={25} />
                            </div>
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
                            <button onClick={()=>navigate('/Servce_history')}>Submit</button>
                        </div>
                        <div className="history12">
                            <FaRegQuestionCircle size={25} color="#14959C" className="iconhistory" />
                            <p>Help & Support</p>
                        </div>
                    </div>
                </div>

            ) : (

                ""
            )}
        </div>
        </div>
    

        </>
    );
};

export default HOC2(History);
