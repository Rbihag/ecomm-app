import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ imageSrc, hoverImageSrc, brand, title, rating, price, grid }) => {
    // console.log('Grid inside ProductCard:', grid);
    const [hovered, setHovered] = useState(false);
    let location = useLocation();

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={` ${location.pathname === "/shop" ? `col-${grid}` : "col-3"} `}>
            <Link
                className='product-card position-relative'
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <div className='product-image'>
                    <img
                        src={hovered ? hoverImageSrc : imageSrc}
                        alt='product'
                    />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>{brand}</h6>
                    <h5 className='product-title'>{title}</h5>
                    <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                    <p className='price'>&#8369; {price}</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/wish.svg' alt='wishlist' />
                        </Link>
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
            </Link>
        </div>
    );
};

export default React.memo(ProductCard, (prevProps, nextProps) => {
    return prevProps.grid === nextProps.grid;
});
