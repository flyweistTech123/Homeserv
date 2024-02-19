import React, { useState } from 'react'
import './Signup.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Signup = () => {
    const [step, setStep] = useState(0);
    const [value, setValue] = useState()

    return (
        <>
            <div className='signup1'>
                <div className='signup2'>
                    <div className='signup3'>
                        Logo
                    </div>
                    <div className='signup4'>
                        <h3>Let’s you in</h3>
                    </div>
                    <div className="signup5">
                        <div className="signup6">
                            <div
                                className={step === 0 ? "signup7" : "signup8"}
                                onClick={() => setStep(0)}
                            >
                                <p>Customer</p>
                            </div>

                        </div>
                        <div className="signup6">
                            <div
                                className={step === 1 ? "signup7" : "signup8"}
                                onClick={() => setStep(1)}
                            >
                                <p>Vendor</p>
                            </div>
                        </div>
                    </div>
                    {step === 0 ? (
                        <div className="signup9">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                                className="signup10"
                                 />
                            )

                            <div className='signup11'>
                                <button>Log IN/Sign UP</button>
                            </div>
                        </div>
                    ) : step === 1 ? (
                        <div className="signup9">

                        </div>

                    ) : (

                        ""
                    )}
                </div>
            </div>
        </>
    )
}

export default Signup