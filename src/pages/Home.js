import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard.js';
import ProductCard from '../components/ProductCard.js';
import SpecialProduct from '../components/SpecialProduct.js';

const Home = () => {
    return (
        <>
            {/* TO DO MAIN BANNER IMAGES LINE 32,40 */}
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl' >
                    <div className='row'>
                        <div className='col-6'>
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src="images/mainbanner.jpg" className="d-block w-100 img-fluid" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <Link className='button'>BUY NOW</Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src="images/catbanner-01.jpg" className="d-block w-100 img-fluid" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* INSERT HERE */}
                                            <h5>TO DO</h5>
                                            <p>TO DO</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/catbanner-03.jpg" className="d-block w-100 img-fluid" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* INSERT HERE */}
                                            <h5>TO DO</h5>
                                            <p>TO DO</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
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
                            hoverImageSrc='images/prod6.png'
                            brand='Zara'
                            title='Coral Dream'
                            rating='4'
                            price='150'
                        />
                        <ProductCard
                            imageSrc='images/prod8.png'
                            hoverImageSrc='images/prod8.png'
                            brand='H&M'
                            title='Sapphire Breeze'
                            rating='3'
                            price='200'
                        />
                        <ProductCard
                            imageSrc='images/prod7.png'
                            hoverImageSrc='images/prod7.png'
                            brand='Guess'
                            title='Enchanting Emerald'
                            rating='5'
                            price='130'
                        />
                        <ProductCard
                            imageSrc='images/prod5.png'
                            hoverImageSrc='images/prod5.png'
                            brand='Mango'
                            title='Sunshine Bliss'
                            rating='4.5'
                            price='170'
                        />
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/f1.png' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Handbag</h5>
                                    <h6>Alma BB</h6>
                                    <p>&#8369;2,370 or &#8369;200/mo. <br />  for 12 mos.* </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/f2.png' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Handbag</h5>
                                    <h6 className='text-dark'>Neverfull</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/f3.png' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Handbag</h5>
                                    <h6 className='text-dark'>Cluny</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/f4.png' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'>Handbag</h5>
                                    <h6 className='text-dark'>Summer</h6>
                                </div>
                            </div>
                        </div>
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