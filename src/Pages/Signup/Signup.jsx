import React, { useState } from 'react'
import './Signup.css'
import 'react-phone-number-input/style.css'
import img84 from '../../Images/img84.png'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate()
    return (
        <>
            <div className='signupconatiner'>
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
                                <div className='signup10'>
                                    <div className='signup14'>
                                        <img src={img84} alt="" />
                                    </div>
                                    <input type="text" placeholder='+91 Enter mobile number' />
                                </div>
                                <div className='signup11'>
                                    <button onClick={()=>navigate('/login')}>Log IN/Sign UP</button>
                                </div>

                                <div className='signup12'>
                                    <input type="checkbox" name="" id="" />
                                    <p>I agree with <span>terms & condition</span></p>
                                </div>
                                <div className='signup12'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Want to connect with us on whatsapp</p>
                                </div>

                                <div className='signup13'>
                                    <p>Log in as vender</p>
                                </div>
                            </div>
                        ) : step === 1 ? (
                            <div className="signup9">
                                <div className='signup10'>
                                    <div className='signup14'>
                                        <img src={img84} alt="" />
                                    </div>
                                    <input type="text" placeholder='+91 Enter mobile number' />
                                </div>
                                <div className='signup11'>
                                    <button onClick={()=>navigate('/login')}>Log IN/Sign UP</button>
                                </div>

                                <div className='signup12'>
                                    <input type="checkbox" name="" id="" />
                                    <p>I agree with <span>terms & condition</span></p>
                                </div>
                                <div className='signup12'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Want to connect with us on whatsapp</p>
                                </div>

                                <div className='signup13'>
                                    <p>Log in as vender</p>
                                </div>
                            </div>

                        ) : (

                            ""
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup