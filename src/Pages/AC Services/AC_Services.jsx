import React from 'react'
import HOC from '../../Components/HOC/HOC';
import './AC_Services.css'


import img from '../../Images/img43.png'
import img1 from '../../Images/img44.png'
import img2 from '../../Images/img45.png'
import img3 from '../../Images/img46.png'
import img4 from '../../Images/img47.png'
import img5 from '../../Images/img48.png'
import img6 from '../../Images/img49.png'



const AC_Services = () => {
    return (
        <>
            <div className='acservice'>
                <h3>AC Services & Repair</h3>


                <div className='acservice1'>
                    <div className='acservice2'>
                        <div className='acservice3'>
                            <img src={img} alt="" />
                        </div>

                        <div className='acservice4'>
                            <div className='acservice5'>
                                <div className='acservice6'>
                                    <img width={40.12} src={img1} alt="" />
                                    <span>AC Service</span>
                                </div>
                                <div className='acservice6'>
                                    <img width={23.07} src={img2} alt="" />
                                    <span>AC Service</span>
                                </div>
                                <div className='acservice6'>
                                    <img width={26.72} src={img3} alt="" />
                                    <span>AC Service</span>
                                </div>
                                <div className='acservice6'>
                                    <img width={28.09} src={img4} alt="" />
                                    <span>AC Service</span>
                                </div>
                            </div>

                            <div className='acservice7'>
                                <h3>Popular service near you</h3>
                                <div className='acservice8'>
                                    <div className='acservice9'>
                                        <h6>Split AC Service</h6>
                                        <p>Power jet servicing for enhanced cooling</p>
                                        <div className='acservice10'>
                                            <div className='acservice11'>
                                                <span>₹399</span>
                                                <span>₹599</span>
                                                <img src={img5} alt="" />
                                            </div>

                                            <div className='acservice12'>
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acservice9'>
                                        <h6>Split AC Service</h6>
                                        <p>Power jet servicing for enhanced cooling</p>
                                        <div className='acservice10'>
                                            <div className='acservice11'>
                                                <span>₹399</span>
                                                <span>₹599</span>
                                                <img src={img5} alt="" />
                                            </div>

                                            <div className='acservice12'>
                                                <button>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='acservice13'>
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AC_Services)