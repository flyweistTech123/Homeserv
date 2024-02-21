import React from 'react'
import './Home.css'
import HOC2 from '../../Components/HOC_second/HOC2'
import { Link, useNavigate } from 'react-router-dom'



import img from '../../Images/img56.png'
import img1 from '../../Images/img57.png'
import img2 from '../../Images/img58.png'
import img3 from '../../Images/img59.png'
import img4 from '../../Images/img60.png'
import img5 from '../../Images/img61.png'
import img6 from '../../Images/img24.png'
import img7 from '../../Images/img20.png'
import img8 from '../../Images/img21.png'
import img9 from '../../Images/img37.png'
import img10 from '../../Images/img27.png'
import img11 from '../../Images/img38.png'
import img12 from '../../Images/img51.png'
import img13 from '../../Images/img32.png'
import img14 from '../../Images/img33.png'
import img15 from '../../Images/img34.png'
import img16 from '../../Images/img62.png'
import img17 from '../../Images/img63.png'



const Home = () => {
  return (
    <>
      <div className='landingpage'>
        <div className='landingpage1'>
          <h6>Special Offers</h6>
          <span>See All</span>
        </div>
        <div className='landingpagecontainer'>
          <div className='landingpage2'>
            <div className='landingpage278'>
              <img src={img} alt="" />
            </div>

            <div className='landingpage3'>
              <h6>Most Booked Services</h6>
              <div className='landingpage4'>
                <div className='landingpage5'>
                  <img src={img2} alt="" />
                  <h5>Split AC Jet Service </h5>
                  <div className='landingpage6'>
                    <span>Start with  ₹499</span>
                    <span>₹599</span>
                  </div>
                </div>
                <div className='landingpage5'>
                  <img src={img2} alt="" />
                  <h5>Split AC Jet Service </h5>
                  <div className='landingpage6'>
                    <span>Start with  ₹499</span>
                    <span>₹599</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='landingpage7'>
              <h6>Special offers</h6>

              <div className='landingpage11'>
                <div className='landingpage8'>
                  <div className='landingpage9'>
                    <img src={img3} alt="" />
                    <h5>AC Service offer</h5>
                    <p>₹50,000</p>
                  </div>
                  <div className='landingpage10'>
                    <h5>Book Now</h5>
                  </div>
                </div>
                <div className='landingpage8'>
                  <div className='landingpage9'>
                    <img src={img4} alt="" />
                    <h5>AC Service offer</h5>
                    <p>₹50,000</p>
                  </div>
                  <div className='landingpage10'>
                    <h5>Book Now</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='landingpage12'>
            <div className='landingpage13'>
              <img src={img1} alt="" />
            </div>

            <div className='landingpage14'>
              <div className='landingpage18'>
                <h6>Services</h6>
              </div>
              <div className='landingpage15'>
                <div className='landingpage16'>
                  <Link to={'/air_conditioner'}>
                    <div class="landingpage17">
                      <img width={35} src={img5} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Air Conditioner</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/refrigerator_repair'}>
                    <div class="landingpage17">
                      <img width={20} src={img6} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Refrigerator Repair</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/television_repair'}>
                    <div class="landingpage17">
                      <img width={30} src={img7} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Television Repair</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/Washing_Machine'}>
                    <div class="landingpage17">
                      <img width={25} src={img8} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Washing Machine</h6>
                  </div>
                </div>
              </div>

              <div className='landingpage19'>
                <hr />
              </div>
              <div className='landingpage15'>
                <div className='landingpage16'>
                  <Link to={'/all_services'}>
                    <div class="landingpage17">
                      <img width={25} src={img9} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Painter</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/electrician'}>
                    <div class="landingpage17">
                      <img width={20} src={img10} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Electrician</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/all_services'}>
                    <div class="landingpage17">
                      <img width={30} src={img11} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Carpenter</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/all_services'}>
                    <div class="landingpage17">
                      <img width={20} src={img12} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>See More</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='landingpage14'>
              <div className='landingpage18'>
                <h6 style={{marginTop:'30px'}}>Commercial  And Mechanic Repair Service</h6>
              </div>
              <div className='landingpage15' style={{marginTop:'50px'}}>
                <div className='landingpage16'>
                  <Link to={'/ac_services'}>
                    <div class="landingpage17">
                      <img width={40} src={img13} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>AC Commercial</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/ac_services'}>
                    <div class="landingpage17">
                      <img width={25} src={img14} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Refrigerator Commercial</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/ac_services'}>
                    <div class="landingpage17">
                      <img width={35} src={img15} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Kitchen Commercial</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/ac_services'}>
                    <div class="landingpage17">
                      <img width={35} src={img16} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Bike Service</h6>
                  </div>
                </div>
                <div className='landingpage16'>
                  <Link to={'/ac_services'}>
                    <div class="landingpage17">
                      <img width={35} src={img17} alt="" />
                    </div>
                  </Link>


                  <div>
                    <h6>Car Service</h6>
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

export default HOC2(Home)