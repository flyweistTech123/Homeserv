import React from 'react'
import './Order_Bill.css'
import HOC2 from '../../Components/HOC_second/HOC2'
import { FaRegCalendar } from "react-icons/fa6";
import { ImHome } from "react-icons/im";


import img from '../../Images/img76.png'


const Bill = () => {
    return (
        <>
            <div className='bill'>
                <div className='bill1'>
                    <h6>Your Bill Details</h6>
                </div>

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
                <div>
                    <button>Cash Payment</button>
                    <button>Online Payment</button>
                </div>
            </div>
        </>
    )
}

export default HOC2(Bill)