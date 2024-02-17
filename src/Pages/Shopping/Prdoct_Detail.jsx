import React from 'react'
import './Shopping.css'
import HOC2 from '../../Components/HOC_second/HOC2'
import { useNavigate } from 'react-router-dom'
import img from '../../Images/img67.png'
import img1 from '../../Images/img68.png'
import img2 from '../../Images/img69.png'
import img3 from '../../Images/img70.svg'
import img4 from '../../Images/img71.svg'
import img5 from '../../Images/img72.png'
import ProductImageslider from './ProductImageslider'

const Prdoct_Detail = () => {
    const navigate = useNavigate()
    const images = [img, img, img, img];
    return (
        <>
            <div className='shopping'>
                <div className='shopping1'>
                    <h3>Shopping</h3>
                </div>

                <div className='shopping14'>
                    <div className='shopping15'>
                        <div className='shopping16'>
                            <h6>LG Air Conditioned</h6>
                            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit.Borem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className='shopping17'>
                            <p>Special Off 34%</p>
                        </div>
                        <div className='shopping18'>
                            <ProductImageslider
                                images={images}
                            />
                            <div className='shopping181'>
                                <img src={img5} alt="" width={125} height={10} />
                            </div>
                        </div>

                        <div className='shopping19'>
                            <h6>Deal for you</h6>
                            <div className='shopping20'>
                                <span>-34% off</span>
                                <span>₹50,000</span>
                                <span>M.R.P</span>
                                <span>₹65,000</span>
                            </div>
                            <div className='shopping21'>
                                <div className='shopping22'>
                                    <div className='shopping23'></div>
                                    <p>Available in stock</p>
                                </div>
                                <div className='shopping24'>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>

                            </div>
                        </div>

                        <div className='shopping25'>
                            <button onClick={()=>navigate('/order')}>Add to Cart</button>
                            <button onClick={()=>navigate('/order')}>Buy Now</button>
                        </div>
                    </div>

                    <div className='shopping26'>
                        <div className='shopping27'>
                            <h6>Product Description</h6>
                        </div>
                        <div className='shopping28'>
                            <div className='shopping29'>
                                <p>Brand -</p>
                                <span>Loren Epsom</span>
                            </div>
                            <div className='shopping29'>
                                <p>Capacity -</p>
                                <span>Loren Epsom</span>
                            </div>
                            <div className='shopping29'>
                                <p>Features -</p>
                                <span>Loren Epsom</span>
                            </div>
                            <div className='shopping29'>
                                <p>Color -</p>
                                <span>Loren Epsom</span>
                            </div>
                        </div>

                        <div className='shopping30'>
                            <span>More Product Details</span>
                        </div>

                        <div className='shopping31'>
                            <p>Our Special Service</p>

                            <div className='shopping32'>
                                <img src={img1} alt="" />
                                <p>Free Delivery</p>
                            </div>
                            <div className='shopping32'>
                                <img src={img2} alt="" />
                                <p>6 month warranty</p>
                            </div>
                            <div className='shopping32'>
                                <img src={img3} alt="" />
                                <p>7 days Replacement</p>
                            </div>
                            <div className='shopping32'>
                                <img src={img4} alt="" />
                                <p>Get RAC Repair Maintenance Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC2(Prdoct_Detail)