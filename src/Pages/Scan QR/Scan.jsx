import React from 'react'
import HOC2 from '../../Components/HOC_second/HOC2'
import './Scan.css'

import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdCameraAlt } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";




const Scan = () => {
    return (
        <>
            <div className='scan'>

                <div className='scan2'>
                    <div className='scan3'>
                        <h6>Scan QR Code of RAC Repair Device</h6>
                        <MdOutlineQrCodeScanner size={25} color='#FFFFFF' />
                    </div>
                    <div className='scan3'>
                        <h6>Upload device image with reading</h6>
                        <MdCameraAlt size={25} color='#FFFFFF' />
                    </div>
                    <div className='scan4'>
                        <CgFileDocument  size={25} color='#14959C' />
                        <p>View Detail of my AC</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC2(Scan)