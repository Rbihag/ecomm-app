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
                                    <img src="images/compare.png" alt="compare" />
                                    <p className='mb-0'>Compare</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img className="pb-2" src="images/wishlist.png" alt="wishlist" />
                                    <p className='mb-0'>Wishlist</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/user.png" alt="user" />
                                    <p className='mb-0'>Log In</p>
                                </a>
                            </div>
                            <div>
                                <a className="d-flex align-items-center gap-10 text-dark" href='#'>
                                    <img src="images/cart.png" alt="cart" />
                                    <div className='d-flex flex-column gap-10'>
                                        <span className='badge bg-white text-dark'>&#8369; 0</span>
                                        <p className='mb-0'>&#8369; 500</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-button d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src='images/menu.png' alt='' />
                                        <span className='me-4 d-inline-block'>Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item text-dark" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item text-dark" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item text-dark" to="#">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/">View shop</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
};

export default Header