import React from 'react'
import './Signup.css'
import 'react-phone-number-input/style.css'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const OTP = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='signupconatiner'>
                <div className='login3'>
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <div className='signup1'>
                    <div className='signup2'>
                        <div className='otp'>
                            <h2>Verify your number</h2>
                        </div>

                        <div className='otp1'>
                            <p>Enter 4 digit verification code sent to your phone number</p>
                            <p><span>+9695956958</span>Edit</p>
                        </div>

                        <div className='otp2'>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>

                        <div className='signup11'>
                            <button onClick={()=>navigate('/city')}>Verify</button>
                        </div>

                        <div className='otp3'>
                            <p>Trouble receiving code?</p>
                        </div>

                        <div className='otp4'>
                            <span>60 sec</span>
                            <span>RESEND OTP</span>
                        </div>
                        <div className='otp5'>
                            <p>Terms and conditions </p>
                            <p>privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OTP