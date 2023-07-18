import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = ({ imageSrc, hoverImageSrc1, brand, title, rating, price, discountDays, progress, productCount }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='col-6 mb-3'>
            <Link className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img
                            src={hovered ? hoverImageSrc1 : imageSrc}
                            className='img-fluid'
                            alt='dress'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>{brand}</h5>
                        <h6 className='title'>{title}</h6>
                        <ReactStars count={5} size={24} value={rating} edit={false} activeColor='#ffd700' />
                        <p className='price'>
                            <span className='red-p'>&#8369; {price}</span> &nbsp; <strike>&#8369; 200</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>{discountDays}</b> Days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger'>13</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>23</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>35</span>
                            </div>
                        </div>
                        <div className='prod-count my-3'>
                            <p>Products: {productCount}</p>
                            <div className='progress'>
                                <div
                                    className='progress-bar progress-bar-striped bg-danger progress-bar-animated'
                                    role='progressbar'
                                    aria-valuenow={progress}
                                    aria-valuemin='0'
                                    aria-valuemax='100'
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <Link className='button'>Add To Cart</Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SpecialProduct;
