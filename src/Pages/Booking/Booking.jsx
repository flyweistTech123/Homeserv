import React, { useState } from "react";
import './Booking.css'
import { IoIosArrowForward } from "react-icons/io";

import HOC2 from '../../Components/HOC_second/HOC2'


const Booking = () => {
    const [step, setStep] = useState(0);
    const incCnt = () => {
        setStep((prev) => prev + 1);
    };
    const decCnt = () => {
        setStep((prev) => prev - 1);
    };
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className="booking">
                <div className="booking1">
                    <div className="booking2">
                        <div
                            className={step === 0 ? "booking3" : "booking4"}
                            onClick={() => setStep(0)}
                        >
                            <p>Service Order</p>
                        </div>

                    </div>
                    <div className="booking2">
                        <div
                            className={step === 1 ? "booking3" : "booking4"}
                            onClick={() => setStep(1)}
                        >
                            <p>Shopping Order</p>
                        </div>
                    </div>
                </div>
            </div>

            {step === 0 ? (
                <div className="booking5">
                    <div className="booking6">
                        <div className="booking7">
                            <h6>Order ID:  RAC-0987654</h6>
                            <p>Order Type: AC Repair Service</p>
                            <p>Date:  2nd Feb 2023  10:30 AM  </p>
                        </div>
                        <div className="booking8">
                            <span>Cancelled</span>
                            <IoIosArrowForward color="#14959C" size={25} />
                        </div>
                    </div>

                    <div className="booking6">
                        <div className="booking7">
                            <h6>Order ID:  RAC-0987654</h6>
                            <p>Order Type: AC Repair Service</p>
                            <p>Date:  2nd Feb 2023  10:30 AM  </p>
                        </div>
                        <div className="booking8">
                            <span style={{ color: "#006471" }}>Confirmed</span>
                            <IoIosArrowForward color="#14959C" size={25} />
                        </div>
                    </div>
                </div>
            ) : step === 1 ? (
                <div className="booking5">
                    <div className="booking6">
                        <div className="booking7">
                            <h6>Order ID:  RAC-0987654</h6>
                            <p>Order Type: AC Repair Service</p>
                            <p>Date:  2nd Feb 2023  10:30 AM  </p>
                        </div>
                        <div className="booking8">
                            <span>Cancelled</span>
                            <IoIosArrowForward color="#14959C" size={25} />
                        </div>
                    </div>

                    <div className="booking6">
                        <div className="booking7">
                            <h6>Order ID:  RAC-0987654</h6>
                            <p>Order Type: AC Repair Service</p>
                            <p>Date:  2nd Feb 2023  10:30 AM  </p>
                        </div>
                        <div className="booking8">
                            <span style={{ color: "#006471" }}>Confirmed</span>
                            <IoIosArrowForward color="#14959C" size={25} />
                        </div>
                    </div>
                </div>

            ) : (

                ""
            )}
        </>
    );
};

export default HOC2(Booking);
