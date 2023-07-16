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

        </>
    );
};

export default Home