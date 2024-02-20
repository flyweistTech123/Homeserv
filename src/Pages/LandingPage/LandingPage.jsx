import React from 'react'
import './LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'


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
import img12 from '../../Images/img13.png'
import img13 from '../../Images/img14.png'
import img14 from '../../Images/img15.png'
import img15 from '../../Images/img16.png'
import img16 from '../../Images/img17.png'
import img17 from '../../Images/img18.png'
import img18 from '../../Images/img19.png'
import img19 from '../../Images/img20.png'
import img20 from '../../Images/img24.png'
import img21 from '../../Images/img21.png'
import img22 from '../../Images/img22.png'
import img23 from '../../Images/img23.png'
import img24 from '../../Images/img25.png'
import img25 from '../../Images/img26.png'
import img26 from '../../Images/img27.png'
import img27 from '../../Images/img28.png'
import img28 from '../../Images/img29.png'
import img29 from '../../Images/img30.png'
import img30 from '../../Images/img31.png'
import img31 from '../../Images/img32.png'
import img32 from '../../Images/img33.png'
import img33 from '../../Images/img34.png'
import img34 from '../../Images/img35.png'
import img35 from '../../Images/img36.png'
import img36 from '../../Images/img37.png'
import img37 from '../../Images/img38.png'
import img38 from '../../Images/img39.png'
import img39 from '../../Images/img40.png'
import img40 from '../../Images/img41.png'
import img41 from '../../Images/img42.png'
import img42 from '../../Images/img51.png'












import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Footer from '../../Components/Footer/Footer'




const LandingPage = () => {
    const navigate = useNavigate()
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


                    <div className='home14'>
                        <h2>Why Choose US</h2>

                        <div className='home15'>
                            <div className='home16'>
                                <span>10,000+</span>
                                <span>Retail Stores</span>
                            </div>
                            <div className='home16'>
                                <span>300+</span>
                                <span>Brands Covered</span>
                            </div>
                            <div className='home16'>
                                <span>80+</span>
                                <span>Lakh Customer</span>
                            </div>
                        </div>

                    </div>

                    <div className='home17'>
                        <img src={img12} alt="" />
                    </div>


                    <div className='home18'>
                        <h2>Domestic Repair Services</h2>

                        <div class="home19">
                            <div className='home21'>
                                <Link to={'/ac_services'}>
                                    <div class="home20">
                                        <img width={35} src={img14} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>AC Service & Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/air_coller_services'}>
                                    <div class="home20">
                                        <img width={35} src={img14} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Air Cooler Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/Air_Purifier'}>
                                    <div class="home20">
                                        <img width={35} src={img14} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Air Purifier</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/chimney_repair'}>
                                    <div class="home20">
                                        <img width={25} src={img15} alt="" />
                                    </div>
                                </Link>

                                <div>
                                    <h6>Chimney Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/laptop_repair'}>
                                    <div class="home20">
                                        <img width={25} src={img16} alt="" />
                                    </div>
                                </Link>

                                <div>
                                    <h6>Laptop Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/inverter_repair'}>
                                    <div class="home20">
                                        <img width={30} src={img17} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Inverter Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/mixer_repair'}>
                                    <div class="home20">
                                        <img width={30} src={img18} alt="" />
                                    </div>
                                </Link>

                                <div>
                                    <h6>Mixer & Grinder Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/television_repair'}>
                                    <div class="home20">
                                        <img width={35} src={img19} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Television Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/refrigerator_repair'}>
                                    <div class="home20">
                                        <img width={30} src={img20} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Refrigerator Repair</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/Washing_Machine'}>
                                    <div class="home20">
                                        <img width={35} src={img21} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Washing Machine</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/water_purifier'}>
                                    <div class="home20">
                                        <img width={80} src={img24} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Water purifier</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/geyser_repair'}>
                                    <div class="home20">
                                        <img width={30} src={img22} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Geyser</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/microwave_repair'}>
                                    <div class="home20">
                                        <img width={35} src={img23} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Microwave</h6>
                                </div>
                            </div>
                            <div className='home21' >
                                <Link to={'/all_services'}>
                                    <div class="home20" >
                                        <img width={25} src={img42} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>See More</h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='home18'>
                        <h2>Cleaning and Pest Control</h2>

                        <div class="home19">
                            <div className='home21'>
                                <Link to={'/bathroom_kitchen_cleaning'}>
                                    <div class="home20">
                                        <img src={img25} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Bathroom & Kitchen Cleaning</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/electrician'}>
                                    <div class="home20">
                                        <img src={img26} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Electrician</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/full_home_cleaning'}>
                                    <div class="home20">
                                        <img src={img27} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Full home Cleaning</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/Sofa_cleaning'}>
                                    <div class="home20">
                                        <img width={25} src={img28} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Sofa & Carpet Cleaning</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/cockroach_Control'}>
                                    <div class="home20">
                                        <img width={25} src={img29} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Cockroach, ant & general pest Control</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <Link to={'/termite_control'}>
                                    <div class="home20">
                                        <img width={30} src={img30} alt="" />
                                    </div>
                                </Link>


                                <div>
                                    <h6>Termite Control</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='home18'>
                        <h2>Commercial Repair Service</h2>

                        <div class="home199">
                            <div className='home21'>
                                <div class="home20">
                                    <img width={45} src={img31} alt="" />
                                </div>

                                <div>
                                    <h6>AC Commercial</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img src={img32} alt="" />
                                </div>

                                <div>
                                    <h6>Refrigerator Commercial</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img width={45} src={img33} alt="" />
                                </div>

                                <div>
                                    <h6>Kitchen Commercial</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='home18'>
                        <h2>Mechanic Repair Service</h2>

                        <div class="home199">
                            <div className='home21'>
                                <div class="home20">
                                    <img width={45} src={img34} alt="" />
                                </div>

                                <div>
                                    <h6>Bike Service</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img width={45} src={img35} alt="" />
                                </div>

                                <div>
                                    <h6>Car Service</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='home18'>
                        <h2>Home Maintenance service</h2>

                        <div class="home199">
                            <div className='home21'>
                                <div class="home20">
                                    <img src={img26} alt="" />
                                </div>

                                <div>
                                    <h6>Electrician</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img width={30} src={img36} alt="" />
                                </div>

                                <div>
                                    <h6>Painter</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img width={35} src={img37} alt="" />
                                </div>

                                <div>
                                    <h6>Carpenter</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img width={35} src={img38} alt="" />
                                </div>

                                <div>
                                    <h6>Plumbers</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home18'>
                        <h2>Education and Other services</h2>

                        <div class="home199">
                            <div className='home21'>
                                <div class="home20">
                                    <img width={40} src={img39} alt="" />
                                </div>

                                <div>
                                    <h6>AMC Service</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img src={img40} alt="" />
                                </div>

                                <div>
                                    <h6>Rent AC Service</h6>
                                </div>
                            </div>
                            <div className='home21'>
                                <div class="home20">
                                    <img src={img41} alt="" />
                                </div>

                                <div>
                                    <h6>RAC Repair Institute</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='home22'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LandingPage