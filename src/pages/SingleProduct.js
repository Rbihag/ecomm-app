import React from 'react'
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import ProductCard from '../components/ProductCard.js';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
    const props = { width: 600, height: 500, zoomWidth: 500, img: "https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp4_fbt5os.png" }; // Ensure this URL is correct and the image exists at this URL

    const [orderedProduct,] = useState(true);
    return (
        <>
            <Meta title={'Product'} />
            <BreadCrumb title='Product' />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp3_vmjyl1.png' className='img-fluid' alt='' /></div> // Ensure this URL is correct and the image exists at this URL
                                <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101722/sp1_q80yit.png' className='img-fluid' alt='' /></div> // Ensure this URL is correct and the image exists at this URL
                                <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101723/sp2_izpc0c.png' className='img-fluid' alt='' /></div> // Ensure this URL is correct and the image exists at this URL
                                <div><img src='https://res.cloudinary.com/dycuomdir/image/upload/v1690101746/sp5_koeptk.png' className='img-fluid' alt='' /></div> // Ensure this URL is correct and the image exists at this URL
                            </div>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>Feel the essence of elegance and grace as you slip into the enchanting "Sapphire Breeze" dress. Inspired by the mesmerizing beauty of a clear blue sky on a balmy summer day, this exquisite piece encapsulates the very essence of sophistication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Reviews</h3>
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
                                                <a className='text-decoration-underline' href='#'>Write a Review</a>
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
                                        <p className='mt-3'>The floral pattern is tastefully designed, with a mix of vibrant and soft hues that perfectly complement each other. It gives the dress a touch of femininity without being overwhelming. I received so many compliments the first time I wore it, and it made me feel incredibly confident.</p>
                                    </div>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Carmilla</h6>
                                            <ReactStars count={5} size={24} value={4} edit={false} activeColor='#ffd700' />
                                        </div>
                                        <p className='mt-3'>The only minor drawback is that the length was a bit long for my height, but a quick trip to the tailor resolved that. Apart from that, I couldn't be happier with my purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard
                            imageSrc='images/pop1.png' // Ensure this path is correct and the image exists at this path
                            hoverImageSrc='images/pop2.png' // Ensure this path is correct and the image exists at this path
                            brand='Mango'
                            title='Fil Coupe'
                            rating='4'
                            price='130'
                        />
                        <ProductCard
                            imageSrc='images/pop5.png' // Ensure this path is correct and the image exists at this path
                            hoverImageSrc='images/pop6.png' // Ensure this path is correct and the image exists at this path
                            brand='Guess'
                            title='Monogram'
                            rating='3'
                            price='160'
                        />
                        <ProductCard
                            imageSrc='images/pop7.png' // Ensure this path is correct and the image exists at this path
                            hoverImageSrc='images/pop8.png' // Ensure this path is correct and the image exists at this path
                            brand='Old Navy'
                            title='Pen Mesh'
                            rating='5'
                            price='150'
                        />
                        <ProductCard
                            imageSrc='images/pop3.png' // Ensure this path is correct and the image exists at this path
                            hoverImageSrc='images/pop4.png' // Ensure this path is correct and the image exists at this path
                            brand='Levis'
                            title='Leather Trim'
                            rating='4.5'
                            price='190'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct