import React from 'react'
import './Footer.css'
import img from '../../Images/img100.svg'
import img1 from '../../Images/img101.svg'
import img2 from '../../Images/img102.svg'
import img3 from '../../Images/img103.svg'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerconatainer'>
                    <div className='footer1'>
                        <div className='footer2'>
                            <div className='footer3'>
                                <h6>Home<span>serve</span></h6>
                                <p>Expert Care For Your Devices</p>
                            </div>
                            <div className='footer4'>
                                <ul>
                                    <li><img src={img} alt="" /></li>
                                    <li><img src={img1} alt="" /></li>
                                    <li><img src={img2} alt="" /></li>
                                    <li><img src={img3} alt="" /></li>
                                </ul>
                            </div>
                            <div className='footer5'>
                                <img src="https://d2js0267gg4oqb.cloudfront.net/static/images/referral/referral-footer.webp?w=256&q=75" alt="" />
                                <p>Spread the love & win a smartphone</p>
                            </div>
                            <div className='footer10'>
                                <button>Refer Now</button>
                            </div>
                        </div>

                        <div className='footer6'>
                            <h4>Company</h4>
                            <div className='footer7'>
                                <ul>
                                    <a target='blank' href="./about" className='footera'><li>About Us</li></a>
                                    <li>Blog</li>
                                    <li>Careers</li>
                                    <li>In The Media</li>
                                    <li>Whitepapers</li>
                                    <li>Contact Us</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer6'>
                            <h4>Products</h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Mobile Phones</li>
                                    <li>Laptops</li>
                                    <li>Tablets</li>
                                    <li>Digital Cameras</li>
                                    <li>Printers & Scanners</li>
                                    <li>Water Purifiers</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer6'>
                            <h4></h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Air Conditioners</li>
                                    <li>Washing Machine</li>
                                    <li>Refrigerators</li>
                                    <li>Microwaves</li>
                                    <li>Televisions</li>
                                    <li>Fitness Tracker</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer6'>
                            <h4></h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Desktop</li>
                                    <li>Smartwatch</li>
                                    <li>HomeCare</li>
                                    <li>Chimney & Hob</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer1'>
                        <div className='footer8'>
                        </div>
                        <div className='footer6'>
                            <h4>Policies</h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Terms Of Use</li>
                                    <li>Privacy Policy</li>
                                    <li>Cancellations</li>
                                    <li>Annual Returns</li>
                                </ul>
                            </div>

                        </div>
                        <div className='footer6'>
                            <h4>Warranty Check</h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Apple Warranty Check</li>
                                    <li>Iphone Warranty Check</li>
                                    <li>Dell Warranty Check</li>
                                </ul>
                            </div>

                        </div>
                        <div className='footer6'>
                            <h4></h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Sony Warranty Check</li>
                                    <li>Lenovo Warranty Check</li>
                                    <li>Samsung Warranty Check</li>
                                </ul>
                            </div>

                        </div>
                        <div className='footer6'>
                            <h4>Lending Service Provider</h4>
                            <div className='footer7'>
                                <ul>
                                    <li>Customer Consent</li>
                                    <li>Grievance Redressal</li>
                                    <li>LSP Partners</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='footer9'>
                    <p>2023-2024 © Homeserve. All Rights Reserved</p>
                </div>

            </div>
        </>
    )
}

export default Footer