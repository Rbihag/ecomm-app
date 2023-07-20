import React from 'react';
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';

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
                                <h5 className='sub-title'>Availability</h5>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Surprise Product</h3>
                        </div>
                    </div>
                    <div className='col-9'></div>
                </div>
            </div>
        </>
    );
}

export default ViewShop;
