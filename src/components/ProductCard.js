import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const ProductCard = ({ imageSrc, brand, title, rating, price }) => {
    return (
        <div className='col-3'>
            <div className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src={imageSrc} alt='product' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>{brand}</h6>
                    <h5 className='product-title'>{title}</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={rating}
                        edit={false}
                        activeColor='#ffd700'
                    />
                    <p className='price'>&#8369; {price}</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='compare' />
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view' />
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='addcart' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard