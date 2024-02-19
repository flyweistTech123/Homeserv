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

const MyProfile = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='profile'>

                <div className='profile14'>
                    <h2>My Profile</h2>
                </div>
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
                                <button onClick={()=>navigate('/profile')}>Save</button>
                            </div>
                        </div>

                    </div>

                    <div className='profile12'>
                        <div className='profile13'>
                            <label htmlFor="">Name</label>
                            <input type="text"  placeholder='Anil Kumar' />
                        </div>
                        <div className='profile13'>
                            <label htmlFor="">Mobile Number</label>
                            <input type="text"  placeholder='999999999' />
                        </div>
                        <div className='profile13'>
                            <label htmlFor="">Email ID</label>
                            <input type="text"  placeholder='Loren Epsom' />
                        </div>
                        <div className='profile13'>
                            <label htmlFor="">Address</label>
                            <input type="text"  placeholder='Loren Epsom' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC2(MyProfile)