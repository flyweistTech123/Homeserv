import React from 'react'
import './About.css'

import img from '../../Images/img105.svg'
import img1 from '../../Images/img106.jpg'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    return (
        <>

            <div className='aboutnav'>
                <h2>About Us</h2>
            </div>
            <div className='about'>
                <div className='about1'>
                    <div className='about2'>
                        <img src="https://d2js0267gg4oqb.cloudfront.net/static/images/why-onsitego.svg?w=1920&q=75" alt="" />
                    </div>
                    <div className='about3'>
                        <h2>Who Are We?</h2>
                        <h6>One-stop Solution for All Your Device Needs:</h6>
                        <p>Onsitego is India’s leading device-care provider and offers Extended Warranty, Damage Protection, AMC Plans, and On-Demand Repair Services. We cover all electronic devices and home appliances. Our plans are widely available across retail stores and online marketplaces.</p>
                    </div>
                </div>
                <div className='about1'>
                    <div className='about3'>
                        <h2>What We Do</h2>
                        <h6>Deliver ‘WoW’ Experiences to Customers:</h6>
                        <p>We provide hassle-free services for the repair and maintenance of devices and appliances, thus improving the post-purchase ownership experience. Our customer obsession allows us to have the highest Net Promoter Score (NPS) globally in after-sales services.</p>
                    </div>

                    <div className='about2'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='about1'>
                    <div className='about2'>
                        <img src="https://d2js0267gg4oqb.cloudfront.net/static/images/aboutus/WOW.png?w=640&q=75" alt="" />
                    </div>
                    <div className='about3'>
                        <h2>Why We Do What We Do?</h2>
                        <p>The entire device ownership experience of the customer is centered around the brand or the retailer. Brands make fantastic gadgets and retailers are great at selling those gadgets. However, if something goes wrong, getting help from either the brand or the retailer is hectic and troublesome. This is where Onsitego steps in to provide hassle-free and delightful customer service.</p>
                        <p>Our award-winning customer service combined with our thoughtful plans ensure the best care you invest in for your devices & appliances.</p>
                    </div>
                </div>

                <div className='about4'>
                    <h2>The Team</h2>
                    <p>Our core team constitutes of a bunch of dedicated professionals, passionate about making substantial changes in the device protection business.</p>
                    <div className='about5'>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>

                    </div>
                    <div className='about5'>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>
                        <div className='about6'>
                            <div className='about7'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='about8'>
                                <h4>Kunal Mahipal</h4>
                                <p>(CEO)</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className='home22'>
                <Footer />
            </div>
        </>
    )
}

export default About