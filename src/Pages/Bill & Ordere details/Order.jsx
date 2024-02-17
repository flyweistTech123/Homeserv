import React from 'react'
import './Order_Bill.css'
import HOC2 from '../../Components/HOC_second/HOC2'
import { IoMdWallet } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useNavigate } from 'react-router-dom';






import img from '../../Images/img73.png'
import img1 from '../../Images/img74.png'
import img2 from '../../Images/img75.png'
import img5 from '../../Images/img77.png'
import img3 from '../../Images/img78.png'
import img4 from '../../Images/img79.png'

const Order = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='order'>
                <div className='order1'>
                    <h6>Order Summary</h6>
                    <div className='order2'>
                        <p> <img src={img} alt="" />₹5,000 |  <IoMdWallet />₹0</p>
                    </div>
                </div>

                <div className='order3'>
                    <div className='order4'>
                        <h6>Continue with this Address</h6>

                        <div className='order5'>
                            <ImHome size={30} color='#14959C' />
                            <p>P5RM+22W, Hari Park, Mukandpur Part 2, Mukundpur, Delhi, Pincode : 444444</p>
                            <div className='order6'>
                                <MdModeEditOutline size={20} color='#14959C' />
                                <div className='order7'>
                                    <p>EDIT</p>
                                </div>
                            </div>
                        </div>
                        <div className='order8'>
                            <p>Mobile Number: 6357554545</p>
                        </div>

                        <div className='order9'>
                            <button><TbDiscount size={15} />Apply Coupons <IoIosArrowForward size={15} /></button>
                            <button><img src={img} alt="" />Apply Coins</button>
                        </div>

                        <div className='order10'>
                            <span>Add / Remove Items <IoIosArrowForward size={15} /></span>
                            <div className='order11'>
                                <p>100% Safe & Secure Payments</p>
                                <MdOutlinePrivacyTip size={20} color='#FCA001' />
                            </div>
                        </div>
                    </div>

                    <div className='order12'>
                        <h6>Your Order Summary</h6>

                        <div className='order13'>
                            <div className='order134'>
                                <h6>Window AC Service</h6>
                                <h6>Window AC Service</h6>
                                <h6>Split AC Service</h6>
                                <h6>AC Repair</h6>
                                <h6>Split AC Repair</h6>
                            </div>
                            <div className='order134'>
                                <div className='order14'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <div className='order14'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <div className='order14'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <div className='order14'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                                <div className='order14'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div>
                            </div>
                            <div className='order134'>
                                <h6>₹358</h6>
                                <h6>₹358</h6>
                                <h6>₹358</h6>
                                <h6>₹358</h6>
                                <h6>₹358</h6>
                            </div>
                        </div>



                        <div className='order15'>
                            <div className='order135'>
                                <h6 style={{fontWeight:"700"}}>Amount to pay</h6>
                                <h6>₹358</h6>
                            </div>
                            <div className='order16'>
                                <h6>Coin Discount</h6>
                                <h6>- ₹100</h6>
                            </div>
                            <div className='order16'>
                                <h6>Coupon Discount</h6>
                                <h6>- ₹100</h6>
                            </div>
                        </div>
                        <div className='order17'>
                            <div className='order135'>
                                <h6 style={{ fontWeight: '700' }}>Total amount to pay</h6>
                                <h6>₹3508</h6>
                            </div>

                        </div>
                        <div className='order19'>
                            <button onClick={()=>navigate('/bill_details')}>Place Order</button>
                        </div>
                    </div>
                </div>


                <div className='order20'>
                    <div className='order21'>
                        <img src={img1} alt="" />
                        <p>Why trust On Us ?</p>
                    </div>

                    <div className='order22'>
                        <div className='order23'>
                            <img src={img2} alt="" />
                            <p>Verified Partners</p>
                        </div>
                        <div className='order24'>

                        </div>
                        <div className='order23'>
                            <img src={img3} alt="" />
                            <p>On Demand/Scheduled</p>
                        </div>
                        <div className='order24'>

                        </div>
                        <div className='order23'>
                            <img src={img4} alt="" />
                            <p>Transparent Pricing</p>
                        </div>
                        <div className='order24'>

                        </div>
                        <div className='order23'>
                            <img src={img5} alt="" />
                            <p>Service Warranty</p>
                        </div>
                    </div>
                </div>

                <div className='order25'>
                    <span>*Terms & Condition</span>
                    <span>*FAQ</span>
                </div>
            </div>
        </>
    )
}

export default HOC2(Order)