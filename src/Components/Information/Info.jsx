import React from 'react'
import avatar from '../../assets/avataaars.png'

export default function Info() {
    return (
        <>

            <div className='text-white  d-flex justify-content-center align-items-center  infoPage '>


                <div className="caption text-center">

                    <div className="image ">

                        <img src={avatar} alt="" />
                    </div>

                    <h2 className='text-uppercase fs-1 fw-bolder'>start Framework</h2>

                    <div className='position-relative star'>

                        <i className='fa-solid fa-star '></i>

                    </div>

                    <div>
                        Graphic Artist - Web Designer - Illustrator
                    </div>

                </div>

            </div>


        </>
    )
}
