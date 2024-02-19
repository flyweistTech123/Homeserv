import React from 'react'
import './Order_Bill.css'
import HOC2 from '../../Components/HOC_second/HOC2'
import { FaRegCalendar } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { useNavigate } from 'react-router-dom';


import img from '../../Images/img76.png'


const Bill = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='bill'>
                <div className='bill1'>
                    <h6>Your Bill Details</h6>
                </div>
                <div className='bill10'>
                    <div className='bill11'>
                        <div className='bill2'>
                            <h6>Your Service Address</h6>
                            <div className='bill3'>
                                <ImHome size={30} color='#14959C' />
                                <div className='bill4'>
                                    <p>P5RM+22W, Hari Park, Mukandpur Part 2, Mukundpur, Delhi, Pincode : 444444</p>
                                    <p>Mobile Number: 6357554545</p>
                                </div>
                            </div>
                            <div className='bill5'>
                                <FaRegCalendar ize={30} color='#14959C' />
                                <p>March 31st 2023, 7:30 PM</p>
                            </div>
                        </div>

                        <div className='bill6'>
                            <img src={img} alt="" />
                            <div className='bill7'>
                                <h6>You Win 1000 Coins on this order.</h6>
                                <p>You can use coins in Next order.</p>
                                <div className='bill8'>
                                    <input type="checkbox" />
                                    <span>I Accept all Rac Repair Terms & Condition.</span>
                                </div>
                            </div>
                        </div>
                        <div className='bill9'>
                            <button>Cash Payment</button>
                            <button>Online Payment</button>
                        </div>
                    </div>

                    <div className='bill12'>
                        <div className='order12'>
                            <h6>Bill Details</h6>
                            <div className='bill18'>
                                <div className='bill13'>
                                    <div className='bill144'>
                                        <h6 style={{ fontWeight: '700' }}>Items Name</h6>
                                        <h6>Window AC Service</h6>
                                        <h6>Split AC Service</h6>
                                        <h6>Installation AC</h6>
                                        <h6>Window AC Repairr</h6>
                                    </div>
                                    <div className='bill14'>
                                        <h6 style={{ fontWeight: '700' }} >Qty</h6>
                                        <h6>1</h6>
                                        <h6>1</h6>
                                        <h6>1</h6>
                                        <h6>1</h6>
                                    </div>
                                    <div className='bill14'>
                                        <h6 style={{ fontWeight: '700' }}>Amount</h6>
                                        <h6>₹450</h6>
                                        <h6>₹350</h6>
                                        <h6>₹200</h6>
                                        <h6>₹500</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill16'>
                                        <h6>Total Amount</h6>
                                        <h6>₹1500</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill16'>
                                        <h6>Safty fee</h6>
                                        <h6>₹500</h6>
                                    </div>
                                </div>

                                <div className='bill15'>
                                    <div className='bill17'>
                                        <h6>Coin Discount</h6>
                                        <h6>₹ 100</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill17'>
                                        <h6>Coupon Discount</h6>
                                        <h6>₹ 100</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill19'>
                                        <h6>Total Discount</h6>
                                        <h6>-₹ 200</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill16'>
                                        <h6>GST (18%)</h6>
                                        <h6>₹ 180</h6>
                                    </div>
                                </div>
                                <div className='bill15'>
                                    <div className='bill16'>
                                        <h6 style={{fontWeight:'600'}}>Total Amount to be Paid</h6>
                                        <h6>₹ 1400</h6>
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

export default HOC2(Bill)