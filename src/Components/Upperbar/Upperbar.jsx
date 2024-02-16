import React from 'react'
import './Upperbar.css'
import { FaFilter } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";




import img from '../../Images/img52.png'
import img1 from '../../Images/img53.png'
import img2 from '../../Images/img54.png'
import img3 from '../../Images/img55.png'

const Upperbar = () => {
    return (
        <>
            <div className='upperbar1'>

                <div className='upperbar9'>
                    <div className='upperbar2'>
                        <div>
                            <IoMdSearch size={18} />
                            <input type="search" placeholder='Search for Service' />
                        </div>
                        <div className='upperbar3'>
                            <FaFilter />
                        </div>
                    </div>

                    <div className='upperbar4'>
                        <div className='upperbar5'>
                            <img src={img} alt="" />
                            <img src={img1} alt="" />
                        </div>
                        <div className='upperbar6'>
                            <img src={img2} alt="" />
                            <span>Anil Kumar</span>
                        </div>

                        <div className='upperbar7'>
                            <img src={img3} alt="" width={15} height={15} />
                            <p>Noida, sector 142</p>
                            <MdKeyboardArrowDown color='#005DAF' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Upperbar