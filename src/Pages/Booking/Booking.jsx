import React, { useState } from "react";
import './Booking.css'

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
                <div className="basic1">
                    <h3>Personal Details</h3>

                </div>
            ) : step === 1 ? (
                <div className="recp1">
                    <h4>Electronic Reciept</h4>

                </div>

            ) : (

                ""
            )}
        </>
    );
};

export default HOC2(Booking);
