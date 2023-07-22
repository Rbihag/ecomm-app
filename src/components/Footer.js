import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className='mb-0'>Subscribe To Our Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Enter Your E-mail Here" aria-label="Enter Your E-mail Here" aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='mb-4'>Contact Us</h4>
                            <div>
                                <address className='fs-6'> 102 J&L Payas Bldg.,<br />CP Garcia St., Poblacion, <br />Alaminos City, Pangasinan, <br />ZIP Code 2404, Philippines </address>
                                <a href="tel:(+63)9123-456-789" className='mt-3 d-block mb-1'>(+63)9123-456-789</a>
                                <a href="mailto:bihag.rudolf@gmail.com" className='mt-2 d-block mb-0'>Email Us</a>
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <a href='https://www.facebook.com/profile.php?id=100081207085359' target='_blank' rel='noreferrer'><img src='images/facebook.png' alt='social icons' /></a>
                                    <a href='https://www.linkedin.com/in/rudolf-lowe-bihag-155723278/' target='_blank' rel='noreferrer'><img src='images/linkedin.png' alt='social icons' /></a>
                                    <a href='https://github.com/Rbihag' target='_blank' rel='noreferrer'><img src='images/github.png' alt='social icons' /></a>
                                    <a href='https://gitlab.com/bihag.rudolf' target='_blank' rel='noreferrer'><img src='images/gitlab.png' alt='social icons' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='mb-4'>About</h4>
                            <div className='footer-link d-flex flex-column'>
                                <NavLink to='/terms-conditions' className="text-dark py-2 mb-1">Terms And Conditions</NavLink>
                                <NavLink to='/shipping-policy' className="text-dark py-2 mb-1">Shipping Policy</NavLink>
                                <NavLink to='/privacy-policy' className="text-dark py-2 mb-1">Privacy Policy</NavLink>
                                <NavLink to='/refund-policy' className="text-dark py-2 mb-1">Refund Policy</NavLink>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='mb-4'>Support</h4>
                            <div className='footer-link d-flex flex-column'>
                                <NavLink className="text-dark py-2 mb-1">Your Account</NavLink>
                                <NavLink className="text-dark py-2 mb-1">About Us</NavLink>
                                <NavLink className="text-dark py-2 mb-1">FAQ</NavLink>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='mb-4'>Products</h4>
                            <div className='footer-link d-flex flex-column'>
                                <NavLink className="text-dark py-2 mb-1">Ready-To-Wear</NavLink>
                                <NavLink className="text-dark py-2 mb-1">Handbags</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl' >
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0' >&copy; {new Date().getFullYear()};Web Developer: RBihag<br />Graphic Artist: Cainex </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer