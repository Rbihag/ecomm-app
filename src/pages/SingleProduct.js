import React from 'react'
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import ProductCard from '../components/ProductCard.js';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color.js';
import { MdCompareArrows } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container.js';


const SingleProduct = () => {
    const props = { width: 600, height: 500, zoomWidth: 600, img: "https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp4_fbt5os.png" };

    const [orderedProduct,] = useState(true);

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <>
            <Meta title={'Product'} />
            <BreadCrumb title='Product' />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp3_vmjyl1.png' className='img-fluid' alt='' /></div>
                            <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp1_q80yit.png' className='img-fluid' alt='' /></div>
                            <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101723/sp2_izpc0c.png' className='img-fluid' alt='' /></div>
                            <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101746/sp5_koeptk.png' className='img-fluid' alt='' /></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Alma BB</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>&#8369; 2,370</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3> <p className='product-data'>Louis Vuitton</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3> <p className='product-data'>Handbags</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availability :</h3> <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3> <p className='product-data'>Hbag</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3> <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3> <Color />

                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3> <div className=''>
                                        <input
                                            type='number'
                                            style={{ width: "70px" }} name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <Link to='/cart' ><button className='button border-0' type='submit'>Add To Cart</button></Link>
                                        <Link to='/checkout'><button className='button signup'>BUY</button></Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <Link to='/compare-product'><MdCompareArrows className='fs-4 me-2' /> Compare Items</Link>
                                    </div>
                                    <div>
                                        <Link to='/wishlist'><AiOutlineHeart className='fs-4 me-2' /> Add to Wishlist</Link>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns:</h3> <p className='product-data'>Easy returns and hassle-free shipping: Shop with confidence knowing that we've got you covered with our customer-friendly shipping and return policy.</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link:</h3>
                                    <a href='https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp4_fbt5os.png' target='_blank' rel='noreferrer' onClick={() => { copyToClipboard("https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp4_fbt5os.png") }}>Click Here</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>Alma BB bag is a classic and stylish handbag that is perfect for everyday use. It is made of high-quality Damier Azur canvas and features a timeless design. The bag has two Toron handles for hand or elbow carry, and it can also be worn cross-body thanks to its removable strap. The Alma BB bag also has a spacious interior that can easily fit all of your essentials.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review' >Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews </h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-decoration-underline' href='#review'>Write a Review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='review-form py-4'>
                                <h4 className='mb-2'>Write a Review </h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div><ReactStars count={5} size={24} value={5} edit={true} activeColor='#ffd700' /></div>
                                    <div>
                                        <textarea name='' id='' cols='30' rows='5' className='w-100 form-control'
                                            placeholder='Type Here' required></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Florynn</h6>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                    </div>
                                    <p className='mt-3'>I love my Alma BB bag! It is the perfect size for everyday use, and it is so stylish. I get compliments on it all the time. The quality is amazing, and I know that this bag will last for years to come.</p>
                                </div>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Carmilla</h6>
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor='#ffd700' />
                                    </div>
                                    <p className='mt-3'>The only minor drawback is that the length of the strap was a bit long for my height. But apart from that, it is a great investment piece. It has a classic design that will never go out of style.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard
                        imageSrc='/images/pop1.png'
                        hoverImageSrc='/images/pop2.png'
                        brand='Mango'
                        title='Fil Coupe'
                        rating='4'
                        price='130'
                    />
                    <ProductCard
                        imageSrc='/images/pop5.png'
                        hoverImageSrc='/images/pop6.png'
                        brand='Guess'
                        title='Monogram'
                        rating='3'
                        price='160'
                    />
                    <ProductCard
                        imageSrc='/images/pop7.png'
                        hoverImageSrc='/images/pop8.png'
                        brand='Old Navy'
                        title='Pen Mesh'
                        rating='5'
                        price='150'
                    />
                    <ProductCard
                        imageSrc='/images/pop3.png'
                        hoverImageSrc='/images/pop4.png'
                        brand='Levis'
                        title='Leather Trim'
                        rating='4.5'
                        price='190'
                    />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct