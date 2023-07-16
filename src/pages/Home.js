import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='hone-wrapper-1 py-5'>
                <div className='container-xxl' >
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                {/* banner image */}
                                <img src='images/mainbanner.jpg' className='img-fluid rounded-3' alt='mainbanner' />
                                <div className='main-banner-content position-absolute '>
                                    <h4>Make Everyday <br />A Runway Show</h4>
                                    <h5>Glitz and Glam</h5>
                                    <p>Add some sparkle to your <br />look with this dazzling dress</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative'>
                                    {/* banner image */}
                                    <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner' />
                                    {/* small banner content */}
                                    {/* <div className='small-banner-content position-absolute '>
                                    </div> */}
                                </div>
                                <div className='small-banner position-relative'>
                                    {/* banner image */}
                                    <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner' />
                                    {/* small banner content */}
                                    {/* <div className='small-banner-content position-absolute '>
                                    </div> */}
                                </div>
                                <div className='small-banner position-relative'>
                                    {/* banner image */}
                                    <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small banner' />
                                    {/* small banner content */}
                                    {/* <div className='small-banner-content position-absolute '>
                                    </div> */}
                                </div>
                                <div className='small-banner position-relative'>
                                    {/* banner image */}
                                    <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small banner' />
                                    {/* small banner content */}
                                    {/* <div className='small-banner-content position-absolute '>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service.png' alt='services' />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className="mb-0">For Orders Over &#8369;500</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-02.png' alt='services' />
                                    <div>
                                        <h6>Daily Surprises</h6>
                                        <p className="mb-0">Save Up To 30% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-03.png' alt='services' />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">After Sales Support</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-04.png' alt='services' />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className="mb-0">Guaranteed Low Price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='images/service-05.png' alt='services' />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className="mb-0">100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home