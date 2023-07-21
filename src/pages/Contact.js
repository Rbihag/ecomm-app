import React from 'react';
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';

const Contact = () => {
    return (
        <>
            <Meta title='Contact Us' />
            <BreadCrumb title='Contact Us' />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact