import React from 'react'
import './Home.css'


import img from '../../Images/img1.png'
import img1 from '../../Images/img2.png'
import img2 from '../../Images/img3.png'
import img3 from '../../Images/img4.png'
import img4 from '../../Images/img5.png'
import img5 from '../../Images/img6.png'
import img6 from '../../Images/img7.png'
import img7 from '../../Images/img8.png'
import img8 from '../../Images/img9.png'
import img9 from '../../Images/img10.png'
import img10 from '../../Images/img11.png'
import img11 from '../../Images/img12.png'






import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";




const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home1'>
                    <div className='home2'>
                        <div className='home3'>
                            <RxHamburgerMenu size={30} color='#FFFFFF' />
                            <h6>Home<span>serve</span></h6>
                        </div>

                        <div className='home4'>
                            <FiShoppingCart size={30} color='#FFFFFF' />
                            <CgProfile size={30} color='#FFFFFF' />
                        </div>
                    </div>

                    <div className='home5'>
                        <img src={img} alt="" />
                    </div>

                    <div className='home6'>
                        <h2>Expect care for your devices</h2>

                        <div className='home7'>
                            <div className='home8'>
                                <img src={img1} alt="" />
                                <span>Delhi NCR</span>
                                <IoMdArrowDropdown size={25} />
                                <div>
                                    <hr className="vertical-line" />
                                </div>
                            </div>
                            <div className='home9'>
                                <input type="search" name="" id="" placeholder='Select a device' />
                                <IoSearch size={35} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home10'>


                    <div className='home11'>
                        <h2>Explore Our Services</h2>
                        <div className='home12'>
                            <div className='home13'>
                                <img src={img2} alt="" />
                                <h5>Iphone Gold new</h5>
                            </div>
                            <div className='home13'>
                                <img src={img3} alt="" />
                                <h5>Water Purifier</h5>
                            </div>
                            <div className='home13'>
                                <img src={img4} alt="" />
                                <h5>Refrigerator repair</h5>
                            </div>
                            <div className='home13'>
                                <img src={img5} alt="" />
                                <h5>Ac Repair & service</h5>
                            </div>
                            <div className='home13'>
                                <img src={img6} alt="" />
                                <h5>Television Extended</h5>
                            </div>
                            <div className='home13'>
                                <img src={img7} alt="" />
                                <h5>Mobile Extended</h5>
                            </div>
                            <div className='home13'>
                                <img src={img8} alt="" />
                                <h5>Laptop Protection</h5>
                            </div>
                            <div className='home13'>
                                <img src={img9} alt="" />
                                <h5>Refrigerator Extended</h5>
                            </div>    <div className='home13'>
                                <img src={img10} alt="" />
                                <h5>Washing machine</h5>
                            </div> 
                            <div className='home13'>
                                <img src={img11} alt="" />
                                <h5>Room Cooler</h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Home