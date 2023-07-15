import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';


const Header = () => {
    return <>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p className="text-dark mb-0">50% OFF ON YOUR FIRST PURCHASE</p>
                    </div>
                    <div className="col-6">
                        <p className="text-end text-dark mb-0">
                            Call Us:{" "}
                            {/* insert contact number here */}
                            <a className="text-primary" href="tel: +63 9369066567">(+63)9123-456-789</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h1>
                            <Link className="text-dark">Ara Ukay Alaminos</Link>
                        </h1>
                    </div>
                    <div className="col-5" style={{ paddingBottom: '5px' }}>
                        <div className="input-group">
                            <input
                                type="text"
                                class="form-control py-2"
                                placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' />
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-links d-flex align-items-center justify-content-between">
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/compare.svg" alt="compare" />
                                    <p>Compare <br /> Products</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/wishlist.svg" alt="wishlist" />
                                    <p>My <br /> Wishlist</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/user.svg" alt="user" />
                                    <p>Log In <br /> My Account</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/cart.svg" alt="cart" />
                                    <div className='d-flex flex-column gap-10'>
                                        <span className='badge bg-white text-dark'>&#8369; 0</span>
                                        <p>&#8369; 500</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
};

export default Header