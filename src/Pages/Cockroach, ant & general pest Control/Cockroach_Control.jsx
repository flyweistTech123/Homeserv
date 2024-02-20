import React, { useState } from 'react'
import HOC from '../../Components/HOC/HOC';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



import img from '../../Images/img43.png'
import img1 from '../../Images/img44.png'
import img2 from '../../Images/img45.png'
import img3 from '../../Images/img46.png'
import img4 from '../../Images/img47.png'
import img5 from '../../Images/img48.png'
import img6 from '../../Images/img49.png'
import img7 from '../../Images/img50.png'
import AC_card from '../AC Services/AC_card';



const Cockroach_Control = () => {
    const images = [img, img, img, img];

    const [show, setShow] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const [modalShow1, setModalShow1] = useState(false);

    const handleClose1 = () => setModalShow1(false);
    const handleShow1 = () => setModalShow1(true);
    const navigate = useNavigate()
    return (
        <>
            <div className='acservice111'>
                <div className='acservice112'>
                    <h3>Cockroach, ant & general pest Control</h3>
                </div>
            </div>
            <div className='acservice'>
                <div className='acservice1'>
                    <div className='acservice2'>
                        <div className='acservice3'>
                            <AC_card
                                images={images}
                            />
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
                        <img width={56} src={img6} alt="" onClick={() => setShow(!show)} />
                        {show && (
                            <div className='acservice22'>
                                <div className='acservice20'>
                                    <div className="acservice21" onClick={handleShow}>
                                        <img width={30} src={img1} alt="" />
                                    </div>
                                    <div>
                                        <h6>AC Service</h6>
                                    </div>
                                </div>
                                <div className='acservice20'>
                                    <div className="acservice21" onClick={handleShow}>
                                        <img width={20} src={img2} alt="" />
                                    </div>
                                    <div>
                                        <h6>AC Gas Charging</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="acservice14" >
                    <div className="acservice15">
                        <h5>Kitchen & Bathroom Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Bathroom & Kitchen with utensils removal</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Kitchen & Bathroom Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Bathroom & Kitchen</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Kitchen & Bathroom Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Bathroom & Kitchen</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Home Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Apartment Pest Control</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Home Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Bungalow Pest Control</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Home Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Utensils Removal Service</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Offices and Shops Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Offices Pest Control</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Offices and Shops Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Rental Shop Pest Control</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>
                    <div className="acservice15">
                        <h5>Offices and Shops Pest Control</h5>
                        <div className='acservice16'>
                            <div className="acservice17">
                                <h6>Rental Shop Pest Control</h6>
                                <p>Starts with ₹299  ( 45 mins)</p>
                                <hr />

                                <ul>
                                    <li>
                                        Accurate diagnosis & same day resolution after detailed inspection
                                    </li>
                                    <li>
                                        Visit charges of ₹299 will be adjusted in the final bill
                                    </li>
                                </ul>
                            </div>

                            <div className="acservice18">
                                <img src={img7} alt="" />

                                <button>Add</button>

                                <span>View More</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='acservice19'>
                    <button>1 item | 5000  </button>
                    <button onClick={()=>navigate('/order')} >View Cart</button>
                </div>
            </div>


            <Modal show={modalShow} onHide={handleClose} className="custom-modal">
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title>Essential AC Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalAc'>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Split AC Service</p>
                                <span>₹ 599</span>
                                <span>₹ 399</span>
                            </div>

                            <div className='modalAc3'>
                                <button onClick={handleShow1}>Add</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Window AC Service</p>
                                <span>₹ 599</span>
                                <span>₹ 359</span>
                            </div>

                            <div className='modalAc3'>
                                <button onClick={handleShow1}>Add</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Split AC Service (Combo Of 2)</p>
                                <span>₹ 1,099</span>
                                <span>₹ 699</span>
                            </div>

                            <div className='modalAc3'>
                                <button onClick={handleShow1}>Add</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Window AC Service (Combo Of 2)</p>
                                <span>₹ 999</span>
                                <span>₹ 609</span>
                            </div>

                            <div className='modalAc3'>
                                <button onClick={handleShow1}>Add</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <div className='modalAc4'>
                        <button>Proceed</button>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={modalShow1} onHide={handleClose1}>
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title>Essential AC Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalAc'>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Split AC Service</p>
                                <span>₹ 599</span>
                                <span>₹ 399</span>
                            </div>

                            <div className='modalAc322'>
                                <button>-</button>
                                <div><p>1</p></div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Window AC Service</p>
                                <span>₹ 599</span>
                                <span>₹ 359</span>
                            </div>

                            <div className='modalAc322'>
                                <button>-</button>
                                <div><p>1</p></div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Split AC Service (Combo Of 2)</p>
                                <span>₹ 1,099</span>
                                <span>₹ 699</span>
                            </div>

                            <div className='modalAc322'>
                                <button>-</button>
                                <div><p>1</p></div>
                                <button>+</button>
                            </div>
                        </div>
                        <div className='modalAc1'>
                            <div className='modalAc2'>
                                <p>Window AC Service (Combo Of 2)</p>
                                <span>₹ 999</span>
                                <span>₹ 609</span>
                            </div>

                            <div className='modalAc322'>
                                <button>-</button>
                                <div><p>1</p></div>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <div className='modalAc4'>
                        <button>Proceed</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default HOC(Cockroach_Control)