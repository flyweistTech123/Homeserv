import React from 'react'
import './Signup.css'
import 'react-phone-number-input/style.css'
import img84 from '../../Images/img84.png'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='signupconatiner'>
                <div className='login3'>
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <div className='signup1'>
                    <div className='signup2'>
                        <div className='signup3'>
                            Logo
                        </div>
                        <div className='Login'>
                            <h2>Login to your Account</h2>
                        </div>
                        <div className="signup9">
                            <div className='signup10'>
                                <div className='signup14'>
                                    <img src={img84} alt="" />
                                </div>
                                <input type="text" placeholder='+91 Enter mobile number' />
                            </div>
                            <div className='signup11'>
                                <button onClick={()=>navigate('/otp')}>Log in</button>
                            </div>

                            <div className='signup12'>
                                <input type="checkbox" name="" id="" />
                                <p>I agree with <span>terms & condition</span></p>
                            </div>
                            <div className='Login1'>
                                <p>Did not have an account? <span onClick={()=>navigate('/')}>Sign up</span> </p>
                            </div>

                            <div className='signup13'>
                                <p>Log in as vender</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login