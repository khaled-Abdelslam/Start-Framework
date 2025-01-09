import React from 'react'

export default function Contact() {
    return (
        <>

            <div className='  d-flex justify-content-center align-align-items-start  ContactPage '>

                <div className="caption text-center w-50">



                    <h2 className='text-uppercase fs-1 fw-bolder mt-4 contact'>Contact section</h2>

                    <div className='position-relative star-contact'>

                        <i className='fa-solid fa-star '></i>

                    </div>

                    <form className='pt-5 text-start'>

                        <input type="text" placeholder='userName' className='border-0 border-bottom w-100  py-4' />
                        <input type="text" placeholder='userAge' className='border-0 border-bottom w-100 py-4' />
                        <input type="email" placeholder='userEmail' className='border-0 border-bottom w-100 py-4' />
                        <input type="password" placeholder='userPassword' className='border-0 border-bottom w-100 py-4' />

                        <button className='rounded-2  my-4'>Send Message</button>


                    </form>





                </div>




            </div>

        </>
    )
}
