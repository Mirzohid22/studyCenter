import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../header/img/logo.svg'

function Footer() {
    return (
        <footer className='row d-flex bg-dark text-white pt-4 flex-wrap footer'>
            <div className='col px-5 my-3'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={Logo} alt='' style={{
                            width: '40px',
                            height: '40px'
                        }} />
                        <h4 className='mx-2'>
                            <span>Study</span><span className='text-info'>Center</span>
                        </h4>
                    </div>
                </div>
                <div className='mt-2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, error!</p>
                    <Link to='/' className='btn btn-info text-white'>
                        Get stared
                    </Link>
                </div>
            </div>

            <div className='col my-3'>
                <div className='mb-3'>
                    <h5>News</h5>
                </div>
                <div className='d-flex flex-column text-start'>
                    <Link to='/'>New Course</Link>
                    <Link to='/'>Info</Link>
                    <Link to='/'>Course</Link>
                </div>
            </div>

            <div className='col my-3'>
                <div className='mb-3'>
                    <h5>All port</h5>
                </div>
                <div className='d-flex flex-column text-start'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Team</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Contact us</Link>
                </div>
            </div>

            <div className='col my-3'>
                <div className='mb-3'>
                    <h5>Title</h5>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>
            </div>

            <div className='col my-3 text-start' style={{width: '100%'}}>
                    <h3 className='fs-5 '>Lets our chanel</h3>
                    <div className="container p-0 pt-2">
                        <section className="mb-4">
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#3b5998", borderRadius: '50%' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#55acee", borderRadius: '50%' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i></a>
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#c4302b", borderRadius: '50%' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-youtube"></i></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#0082ca", borderRadius: '50%' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i></a>
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{ backgroundColor: "#55acee", borderRadius: '50%', color: '#fff' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-telegram" style={{zIndex: '99'}}></i></a>
                        </section>
                    </div>
            </div>
            
            <div className="text-center p-3 mt-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", verticalAlign:'middle' }}>
                <h5 className='fs-6'>© 2020 Copyright: <a className="text-info" href="#!"> Study Center</a></h5>
            </div>
        </footer>
    )
}

export default Footer
