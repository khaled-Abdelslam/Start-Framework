import React from 'react'
import red from '../../assets/poert1.png'
import blue from '../../assets/port2.png'
import black from '../../assets/port3.png'


export default function Portfolio() {
    return (
        <>

            <div className='  d-flex justify-content-center align-align-items-start  portfolioPage '>

                <div className="caption text-center">



                    <h2 className='text-uppercase fs-1 fw-bolder mt-4 portfolio'>portfolio component</h2>

                    <div className='position-relative star-portflio'>

                        <i className='fa-solid fa-star '></i>

                    </div>

                    <div className='container my-2'>

                        <div className="row g-4">

                            <div className="col-md-4">
                                <div className="image position-relative ">
                                    <img className='w-100 rounded-3' src={red} alt="redhouse" />
                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="image position-relative">
                                    <img className='w-100 rounded-3' src={blue} alt="redhouse" />
                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="image position-relative">
                                    <img className='w-100 rounded-3' src={black} alt="redhouse" />

                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="image position-relative">
                                    <img className='w-100 rounded-3' src={red} alt="redhouse" />

                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="image position-relative">
                                    <img className='w-100 rounded-3' src={blue} alt="redhouse" />

                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <div className="image position-relative">
                                    <img className='w-100 rounded-3' src={black} alt="redhouse" />

                                    <div className="layer position-absolute start-0 end-0 top-0 bottom-0 d-flex align-items-center justify-content-center">
                                        <i className='fa-solid fa-plus text-white fa-5x'></i>
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
