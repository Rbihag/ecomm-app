import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'


function Wishlist() {
    return (
        <>
            <Meta title={'Wishlist'} />
            <BreadCrumb title='Wishlist' />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/sp3.png' className='img-fluid w-100' alt='dress' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Luxury Chic</h5>
                                    <h6 className='price'>&#8369; 1,150</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/sprod1.png' className='img-fluid w-100' alt='dress' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Alma BB</h5>
                                    <h6 className='price'>&#8369; 2,370</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/pop3.png' className='img-fluid w-100' alt='dress' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Leather Trim</h5>
                                    <h6 className='price'>&#8369; 190</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist