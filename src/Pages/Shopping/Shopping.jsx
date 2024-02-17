import React from 'react'
import './Shopping.css'
import HOC2 from '../../Components/HOC_second/HOC2'

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const Shopping = () => {
    return (
        <>
            <div className='shopping'>
                <div className='shopping1'>
                    <h3>Shopping</h3>
                </div>

                <div className='shopping2'>
                    <h4>Choose your category</h4>
                    <Link to={'/products_shopping'} className='shopping4'>
                    <div className='shopping3'>
                        <p>Home Appliances</p>
                        <IoIosArrowForward color='#14959C' size={25} />
                    </div>
                    </Link> 
                    <div className='shopping3'>
                        <p>Domestics Products</p>
                        <IoIosArrowForward color='#14959C' size={25} />
                    </div>    
                    <div className='shopping3'>
                        <p>Other Products</p>
                        <IoIosArrowForward color='#14959C' size={25} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC2(Shopping)