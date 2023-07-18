import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard.js';
import ProductCard from '../components/ProductCard.js';
import SpecialProduct from '../components/SpecialProduct.js';

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
                                    <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='small banner' />
                                    {/* small banner content */}
                                    {/* <div className='small-banner-content position-absolute '>
                                    </div> */}
                                </div>
                                <div className='small-banner position-relative'>
                                    {/* banner image */}
                                    <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='small banner' />
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
                                <div className='d-flex align-items-center gap-15' >
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
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                                {/* 1 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Old Navy</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/1.png' alt='categories' />
                                </div>
                                {/* 2 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Nike</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/15.png' alt='categories' />
                                </div>
                                {/* 3 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Guess</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/12.png' alt='categories' />
                                </div>
                                {/* 4 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>H&M</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/2.png' alt='categories' />
                                </div>
                                {/* 5 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Zara</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/13.png' alt='categories' />
                                </div>
                                {/* 6 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Mango</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/8.png' alt='categories' />
                                </div>
                                {/* 7 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Levis</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/16.png' alt='categories' />
                                </div>
                                {/* 8 */}
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Puma</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/14.png' alt='categories' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Featured Collection</h3>
                        </div>
                        <ProductCard
                            imageSrc='images/prod6.png'
                            hoverImageSrc='images/prod6-1.png'
                            brand='Zara'
                            title='Coral Dream'
                            rating='4'
                            price='150'
                        />
                        <ProductCard
                            imageSrc='images/prod8.png'
                            hoverImageSrc='images/prod8-1.png'
                            brand='H&M'
                            title='Sapphire Breeze'
                            rating='3'
                            price='200'
                        />
                        <ProductCard
                            imageSrc='images/prod7.png'
                            hoverImageSrc='images/prod7-1.png'
                            brand='Guess'
                            title='Enchanting Emerald'
                            rating='5'
                            price='130'
                        />
                        <ProductCard
                            imageSrc='images/prod5.png'
                            hoverImageSrc='images/prod5-1.png'
                            brand='Mango'
                            title='Sunshine Bliss'
                            rating='4.5'
                            price='170'
                        />
                    </div>
                </div>
            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Special Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <SpecialProduct
                            imageSrc='images/sp1.png'
                            hoverImageSrc1='images/sp12.png'
                            brand='Louis Vuitton'
                            title='Silk Elegance'
                            rating={5}
                            price={800}
                            discountDays={5}
                            progress={65}
                            productCount={5}
                        />
                        <SpecialProduct
                            imageSrc='images/sp2.png'
                            hoverImageSrc1='images/sp21.png'
                            brand='Gucci'
                            title='Tweed Verve'
                            rating={4.5}
                            price={1200}
                            discountDays={3}
                            progress={80}
                            productCount={8}
                        />
                        <SpecialProduct
                            imageSrc='images/sp3.png'
                            hoverImageSrc1='images/sp31.png'
                            brand='Chanel'
                            title='Luxury Chic'
                            rating={4}
                            price={950}
                            discountDays={7}
                            progress={50}
                            productCount={3}
                        />
                        <SpecialProduct
                            imageSrc='images/sp5.png'
                            hoverImageSrc1='images/sp51.png'
                            brand='Prada'
                            title='Classic Glamour'
                            rating={4.5}
                            price={1500}
                            discountDays={2}
                            progress={90}
                            productCount={10}
                        />
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
                            imageSrc='images/pop1.png'
                            hoverImageSrc='images/pop2.png'
                            brand='Mango'
                            title='Fil Coupe'
                            rating='4'
                            price='130'
                        />
                        <ProductCard
                            imageSrc='images/pop5.png'
                            hoverImageSrc='images/pop6.png'
                            brand='Guess'
                            title='Monogram'
                            rating='3'
                            price='160'
                        />
                        <ProductCard
                            imageSrc='images/pop7.png'
                            hoverImageSrc='images/pop8.png'
                            brand='Old Navy'
                            title='Pen Mesh'
                            rating='5'
                            price='150'
                        />
                        <ProductCard
                            imageSrc='images/pop3.png'
                            hoverImageSrc='images/pop4.png'
                            brand='Levis'
                            title='Leather Trim'
                            rating='4.5'
                            price='190'
                        />
                    </div>
                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand1.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand8.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand3.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand4.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand5.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand6.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand7.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='/images/brand2.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Latest News</h3>
                        </div>
                        <BlogCard
                            imageUrl='images/blog2.jpg'
                            date='17 July 2023'
                            title='Be you find your style and flaunt it'
                            description='Browse our collection of clothing and get ready to turn heads wherever you go.'
                        />
                        <BlogCard
                            imageUrl='images/blog1.jpg'
                            date='18 July 2023'
                            title='Discover the latest fashion trends'
                            description='Stay up to date with the hottest fashion trends and elevate your style.'
                        />
                        <BlogCard
                            imageUrl='images/blog3.jpg'
                            date='19 July 2023'
                            title='Tips for creating the perfect outfit'
                            description='Learn how to mix and match different pieces to create stylish and cohesive outfits.'
                        />
                        <BlogCard
                            imageUrl='images/blog4.jpg'
                            date='20 July 2023'
                            title='Stay comfortable and stylish all day'
                            description='Explore our collection of comfortable yet fashionable clothing options.'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home