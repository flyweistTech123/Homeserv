import React, { useEffect, useState } from 'react'
import './City.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";


import img from '../../Images/img87.png'
import img1 from '../../Images/img88.png'
import img2 from '../../Images/img89.png'
import img3 from '../../Images/img90.png'
import img4 from '../../Images/img91.png'
import img5 from '../../Images/img92.png'
import img6 from '../../Images/img93.png'
import img7 from '../../Images/img94.png'
import img8 from '../../Images/img95.png'
import img9 from '../../Images/img96.png'
import img10 from '../../Images/img86.png'
import img11 from '../../Images/img97.png'
import img12 from '../../Images/img98.png'
import img13 from '../../Images/img99.png'

const City = () => {
    const navigate = useNavigate()
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        setModalShow(true);
    }, []);
    const handleClose = () => setModalShow(false);
    return (
        <>
            <div className='city1'>
                <div className='login3'>
                    <BsArrowLeft onClick={() => navigate(-1)} color='#17181D' />
                </div>
                <div className='city2'>
                    <h3>Select Your City</h3>
                </div>

                <div className='city3'>
                    <div className='city4'>
                        <img src={img} alt="" />
                        <h6>Delhi</h6>
                    </div>
                    <div className='city4'>
                        <img src={img1} alt="" />
                        <h6>Noida</h6>
                    </div>
                    <div className='city4'>
                        <img src={img2} alt="" />
                        <h6>Greater Noida</h6>
                    </div>
                    <div className='city4'>
                        <img src={img3} alt="" />
                        <h6>Gurgaon</h6>
                    </div>
                    <div className='city4'>
                        <img src={img4} alt="" />
                        <h6>Ghazibad</h6>
                    </div>
                    <div className='city4'>
                        <img src={img8} alt="" />
                        <h6>Faridabad</h6>
                    </div>
                    <div className='city4'>
                        <img src={img5} alt="" />
                        <h6>Mumbai</h6>
                    </div>
                    <div className='city4'>
                        <img src={img6} alt="" />
                        <h6>Kolkata</h6>
                    </div>
                </div>
                <div className='city5'>
                    <div className='city4'>
                        <img src={img7} alt="" />
                        <h6>Chennai</h6>
                    </div>
                </div>


                <div className='city7'>
                    <div className='city6'>
                        <span>Select City</span>
                        <IoIosArrowDown size={25} color='#006471' />
                    </div>
                </div>

                <div className='city8'>
                    <p>Your city is not listed?</p>
                    <h3>We are coming soon! </h3>
                    <p>(Our team will get the service provided on your area).</p>
                </div>

                <div className='city9'>
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                </div>

            </div>

            <Modal show={modalShow} onHide={handleClose} size="md" backdropClassName="custom-backdrop">
                <Modal.Body>
                    <div className='city10'>
                        <div className='city11'>
                            <img src={img11} alt="" />
                            <p>Allow <span>RAC Repair</span> to access this device’s approximate location?</p>
                        </div>
                        <div className='city12'>
                            <img src={img12} alt="" />
                            <img src={img13} alt="" />
                        </div>
                        <div className='city13' onClick={()=>navigate('/landingpage')}>
                            <p>WHILE USING THE APP</p>
                        </div>
                        <div className='city13'  onClick={()=>navigate('/landingpage')}>
                            <p>ONLY THIS TIME</p>
                        </div>
                        <div className='city13' onClick={handleClose}>
                            <p>DON’T ALLOW</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default City