import React from 'react'

export default function Footer() {
    return (
        <>

            <div className=''>
                <div className='footer py-5'>

                    <div className="container text-white d-flex justify-content-between">

                        <div className="location text-center">

                            <h3 className='text-uppercase'>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>

                        </div>

                        <div className="social">

                            <h3>AROUND THE WEB</h3>

                            <div className="icons d-flex justify-content-center">
                                <i className="fa-brands fa-facebook mx-2"></i>
                                <i className="fa-brands fa-twitter mx-2"></i>
                                <i className="fa-brands fa-linkedin-in mx-2"></i>
                                <i className="fa-solid fa-globe mx-2"></i>
                            </div>

                        </div>


                        <div className="about text-center">
                            <h3 className='text-uppercase'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                        </div>

                    </div>

                </div>

                <div className="copyrights  text-white text-center py-3">

                    <p>Copyright © Your Website 2021</p>
                </div>
            </div>

        </>
    )
}
