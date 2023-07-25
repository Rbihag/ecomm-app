import React from 'react';
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import Container from '../components/Container.js';

const Contact = () => {
    return (
        <>
            <Meta title={'Contact Us'} />
            <BreadCrumb title='Contact Us' />
            <Container class1='contact-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.2726940786797!2d119.97508321151756!3d16.154881784472618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393dccc51d5869d%3A0x4bbc0cbfafaac9d2!2sGen.%20Montemayor%20St%2C%20Poblacion%2C%20Alaminos%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1689927275706!5m2!1sen!2sph"
                            width="600"
                            height="450"
                            className='border-0 w-100'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map - Gen. Montemayor St, Poblacion, Alaminos, Pangasinan"
                        ></iframe>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='contact-inner-wrapper d-flex justify-content-between'>
                            <div>
                                <h3 className='contact-title mb-4'>Contact Us</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' className='form-control' placeholder='Name *'
                                            required />
                                    </div>
                                    <div>
                                        <input type='email' className='form-control' placeholder='Email *' required />
                                    </div>
                                    <div>
                                        <input type='tel' className='form-control' placeholder='Mobile Number *' required />
                                    </div>
                                    <div>
                                        <textarea name='' id='' cols='30' rows='5' className='w-100 form-control'
                                            placeholder='Message *' required></textarea>
                                    </div>
                                    <div>
                                        <button className='button border-0'>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-4 d-flex gap-15 align-items-center'><img className='fs-5' src='images/house.png' alt='' />
                                            <address className='mb-0'>102 J&L Payas Bldg.,
                                                CP Garcia St., Poblacion,
                                                Alaminos City, Pangasinan,
                                                ZIP Code 2404, Philippines
                                            </address>
                                        </li>
                                        <li className='mb-4 d-flex gap-15 align-items-center'><img className='fs-5' src='images/telephone.png' alt='' />
                                            <a href='tel: (+63)9123-456-789'>(+63)9123-456-789</a>
                                        </li>
                                        <li className='mb-4 d-flex gap-15 align-items-center'><img className='fs-5' src='images/open.png' alt='' />
                                            <a href='mailto:bihag.rudolf@gmail.com'>Email: bihag.rudolf@gmail.com</a>
                                        </li>
                                        <li className='mb-4 d-flex gap-15 align-items-center'><img className='fs-5' src='images/info.png' alt='' />
                                            <p className='mb-0'>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact