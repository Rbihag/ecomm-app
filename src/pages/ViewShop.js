import React from 'react';
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import ReactStars from 'react-rating-stars-component';

function ViewShop() {
    return (
        <>
            <Meta title={'View Shop'} />
            <BreadCrumb title='View Shop' />
            <div className='store-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Brands</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Old Navy</li>
                                    <li>Guess</li>
                                    <li>H&M</li>
                                    <li>Zara</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                    <div className='form-toggle'>
                                        <input
                                            className='form-toggle-input'
                                            type='checkbox'
                                            id='inStockToggle'
                                        />
                                        <label className='form-toggle-label' htmlFor='inStockToggle'>
                                            In Stock (3)
                                        </label>
                                    </div>
                                    <div className='form-toggle'>
                                        <input
                                            className='form-toggle-input'
                                            type='checkbox'
                                            id='outOfStockToggle'
                                        />
                                        <label
                                            className='form-toggle-label'
                                            htmlFor='outOfStockToggle'
                                        >
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Colors</h5>
                                <div>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-1" />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            Small (2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-2" />
                                        <label className='form-check-label' htmlFor='color-2'>
                                            Medium (4)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-3" />
                                        <label className='form-check-label' htmlFor='color-3'>
                                            Large (1)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap aling-items-center gap-10'>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>MANGO</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>Zara</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>GUESS</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>H&M</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>LEVIS</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Surprise Product</h3>
                            <div>
                                <div className='surprise-products d-flex'>
                                    <div className='w-50'>
                                        <img src='images/prod5.png' className='img-fluid' alt='dress' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Sunshine Bliss</h5>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                        <b>&#8369; 170</b>
                                    </div>
                                </div>
                                <div className='surprise-products d-flex'>
                                    <div className='w-50'>
                                        <img src='images/pop7.png' className='img-fluid' alt='shorts' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Pen Mesh</h5>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                        <b>&#8369; 150</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'></div>
                </div>
            </div>
        </>
    );
}

export default ViewShop;
