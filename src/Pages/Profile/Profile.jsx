import React from 'react'
import HOC2 from '../../Components/HOC_second/HOC2'
import './Profile.css'
import { useNavigate } from 'react-router-dom';


import { FaRegUserCircle } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { MdOutlineLocationCity } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { TbLanguageHiragana } from "react-icons/tb";
import { GoCrossReference } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { PiFileLock } from "react-icons/pi";
import { MdStarRate } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";











import img from '../../Images/img80.png'

const Profile = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='profile'>
                <div className='profile1'>
                    <div className='profile2'>
                        <div className='profile222'>
                            <div className='profile3'>
                                <div className='profile4'>
                                    <img src={img} alt="" />
                                </div>
                                <div className='profile5'>
                                    <h6>Anil Kumar</h6>
                                    <p>+91 99999 99999</p>
                                </div>
                            </div>

                            <div className='profile6'>
                                <button  onClick={()=>navigate('/myprofile')}>Edit</button>
                            </div>
                        </div>

                    </div>

                    <div className='profile7'>
                        <div className='profile8'>
                            <div className='profile11'>
                                <div className='profile9'>
                                    <FaRegUserCircle size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>My Profile</h6>
                                        <p>Name, Email, contact number.....</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <RiHistoryLine  size={25} color='#17181D' />
                                    <div className='profile10' onClick={()=>navigate('/history')}>
                                        <h6>Order History</h6>
                                        <p>Name, Email, contact number.....</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <MdOutlineLocationCity  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Select City   <IoMdArrowDropdown /></h6>
                                        <p>My city, Saved Address....</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <RiWallet3Fill  size={25} color='#17181D' />
                                    <div className='profile10' onClick={()=>navigate('/mywallet')}>
                                        <h6>My Wallet</h6>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <TbLanguageHiragana  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Language   <IoMdArrowDropdown /></h6>
                                        <p>English</p>
                                    </div>
                                </div>
                                <div className='profile9'  style={{borderBottom:'none'}}>
                                    <GoCrossReference  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Refer Us</h6>
                                        <p>Refer your friends and family</p>
                                    </div>
                                </div>
                            </div>
                            <div className='profile11'>
                                <div className='profile9'>
                                    <IoIosInformationCircle  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>About Us</h6>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <MdPrivacyTip  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Privacy Policy</h6>
                                        <p>Name, Email, contact number.....</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <PiFileLock   size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Terms & Condition</h6>
                                        <p>Name, Email, contact number.....</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <MdStarRate  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Rate us</h6>
                                        <p>Rate us on play store.</p>
                                    </div>
                                </div>
                                <div className='profile9'>
                                    <MdContactSupport  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Support</h6>
                                        <p>Contact Us</p>
                                    </div>
                                </div>
                                <div className='profile9' style={{borderBottom:'none'}}>
                                    <VscSignOut  size={25} color='#17181D' />
                                    <div className='profile10'>
                                        <h6>Sign out</h6>
                                        <p>Name, Email, contact number.....</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC2(Profile)