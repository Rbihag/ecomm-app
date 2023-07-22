import React from 'react'
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import Color from '../components/Color.js';

function CompareProduct() {
    return (
        <>
            <Meta title={'Compare Products'} />
            <BreadCrumb title='Compare Products' />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/prod8.png' alt='dress' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Sapphire Breeze</h5>
                                    <h6 className='price mb-3 mt-3'>&#8369; 200</h6>

                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>H&M</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Ready-To-Wear</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p className='mb-2'>Small</p>
                                                <p className='mb-2'>Medium</p>
                                                <p className='mb-2'>Large</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/pop1.png' alt='dress' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Fil Coupe</h5>
                                    <h6 className='price mb-3 mt-3'>&#8369; 130</h6>

                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Mango</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Ready-To-Wear</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p className='mb-2'>Small</p>
                                                <p className='mb-2'>Medium</p>
                                                <p className='mb-2'>Large</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/pop5.png' alt='dress' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Monogram</h5>
                                    <h6 className='price mb-3 mt-3'>&#8369; 160</h6>

                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Guess</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Ready-To-Wear</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p className='mb-2'>Small</p>
                                                <p className='mb-2'>Medium</p>
                                                <p className='mb-2'>Large</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='product-card-image'>
                                    <img src='images/f4c.png' alt='dress' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>Summer</h5>
                                    <h6 className='price mb-3 mt-3'>&#8369; 2350</h6>

                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Louis Vuitton</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Handbag</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p className='mb-2'>L:12.6 x H:9.1 x W:5.1 Inches</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct