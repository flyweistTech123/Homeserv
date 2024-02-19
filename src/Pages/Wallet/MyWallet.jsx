import React, { useState } from "react";
import './MyWallet.css'

import HOC2 from '../../Components/HOC_second/HOC2'
import { IoMdWallet } from "react-icons/io";

import img from '../../Images/img81.svg'



const MyWallet = () => {
    const [step, setStep] = useState(0);

    return (
        <>
            <div className="walletcontainer">
                <div className='wallet5'>
                    <h2>My Wallet</h2>
                </div>
                <div className="wallet6">
                    <div className="booking1">
                        <div className="booking2">
                            <div
                                className={step === 0 ? "booking3" : "booking4"}
                                onClick={() => setStep(0)}
                            >
                                <p>RAC Wallet</p>
                            </div>

                        </div>
                        <div className="booking2">
                            <div
                                className={step === 1 ? "booking3" : "booking4"}
                                onClick={() => setStep(1)}
                            >
                                <p>RAC Coin</p>
                            </div>
                        </div>
                    </div>
                </div>

                {step === 0 ? (
                    <div className="wallet">
                        <div className="wallet1">
                            <h6>WALLET BALANCE</h6>
                            <p>₹ 0</p>
                        </div>

                        <div className="wallet2">
                            <IoMdWallet size={25} color="#ffffff" />
                            <p>Add Money</p>
                        </div>

                        <div className="wallet3">
                            <h6>What is RAC Wallet ?</h6>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                ) : step === 1 ? (
                    <div className="wallet">
                        <div className="wallet1">
                            <h6>BALANCE</h6>
                            <p><img src={img} alt="" /> 1759</p>
                        </div>

                        <div className="wallet3">
                            <h6>What is RAC Coin ?</h6>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>

                ) : (

                    ""
                )}
            </div>

        </>
    );
};

export default HOC2(MyWallet);
