import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb.js';
import Meta from '../components/Meta.js';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard.js';
import Color from '../components/Color.js';
import Container from '../components/Container.js';


const ViewShop = () => {
    const [grid, setGrid] = useState(4);
    // console.log('Grid:', grid);
    return (
        <>
            <Meta title={'View Shop'} />
            <BreadCrumb title='View Shop' />
            <Container class1='store-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Brands</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Old Navy</li>
                                    <li>Guess</li>
                                    <li>H&M</li>
                                    <li>Zara</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                    <div className='form-toggle'>
                                        <input
                                            className='form-toggle-input'
                                            type='checkbox'
                                            id='inStockToggle'
                                        />
                                        <label className='form-toggle-label' htmlFor='inStockToggle'>
                                            In Stock (3)
                                        </label>
                                    </div>
                                    <div className='form-toggle'>
                                        <input
                                            className='form-toggle-input'
                                            type='checkbox'
                                            id='outOfStockToggle'
                                        />
                                        <label
                                            className='form-toggle-label'
                                            htmlFor='outOfStockToggle'
                                        >
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Colors</h5>
                                <div>
                                    <div>
                                        <Color />
                                    </div>
                                </div>
                                <h5 className='sub-title1'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-1" />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            Small (2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-2" />
                                        <label className='form-check-label' htmlFor='color-2'>
                                            Medium (4)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id="color-3" />
                                        <label className='form-check-label' htmlFor='color-3'>
                                            Large (1)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap aling-items-center gap-10'>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>MANGO</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>Zara</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>GUESS</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>H&M</span>
                                    <span className='badge bg-secondary rounded-3 py-2 px-3'>LEVIS</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Surprise Product</h3>
                            <div>
                                <div className='surprise-products mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src='images/prod5.png' className='img-fluid' alt='dress' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Sunshine Bliss</h5>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                        <b>&#8369; 170</b>
                                    </div>
                                </div>
                                <div className='surprise-products d-flex'>
                                    <div className='w-50'>
                                        <img src='images/pop7.png' className='img-fluid' alt='shorts' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Pen Mesh</h5>
                                        <ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
                                        <b>&#8369; 150</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value='manual'>Featured</option>
                                        <option value='best-selling'>Best Selling</option>
                                        <option value='title-ascending'>Alphabetical, A-Z</option>
                                        <option value='title-descending'>Alphabetical, Z-A</option>
                                        <option value='price-ascending'>Price, Low-High</option>
                                        <option value='price-descending'>Price, High-Low</option>
                                        <option value='created-ascending'>Date, Old-New</option>
                                        <option value='created-descending'>Date, new-Old</option>
                                    </select>
                                </div>
                                <div className='d-flex gap-10 align-items-center grid'>
                                    {/* <img onClick={() => { setGrid(3); }} src='images/gr4.svg' className='d-block img-fluid' alt='grid'></img> */}
                                    <img onClick={() => { setGrid(4); }} src='images/gr3.svg' className='d-block img-fluid' alt='grid'></img>
                                    <img onClick={() => { setGrid(6); }} src='images/gr2.svg' className='d-block img-fluid' alt='grid'></img>
                                    {/* <img onClick={() => { setGrid(12); }} src='images/gr.svg' className='d-block img-fluid' alt='grid'></img> */}
                                </div>
                            </div>
                        </div>
                        <div className='products-list'>
                            <div className="d-flex flex-wrap">
                                <ProductCard grid={grid}
                                    imageSrc='images/sprod1.png'
                                    hoverImageSrc='images/sprod1.png'
                                    brand='Louis Vuitton'
                                    title='Alma BB'
                                    rating={4}
                                    price={2370} />
                                <ProductCard grid={grid}
                                    imageSrc='images/prod8.png'
                                    hoverImageSrc='images/prod8.png'
                                    brand='H&M'
                                    title='Sapphire Breeze'
                                    rating={3}
                                    price={200} />
                                <ProductCard grid={grid}
                                    imageSrc='images/prod7.png'
                                    hoverImageSrc='images/prod7.png'
                                    brand='Guess'
                                    title='Enchanting Emerald'
                                    rating={5}
                                    price={130} />
                                <ProductCard grid={grid}
                                    imageSrc='images/sp1.png'
                                    hoverImageSrc='images/sp1.png'
                                    brand='Louis Vuitton'
                                    title='Silk Elegance'
                                    rating={5}
                                    price={1000} />
                                <ProductCard grid={grid}
                                    imageSrc='images/sp2.png'
                                    hoverImageSrc='images/sp2.png'
                                    brand='Gucci'
                                    title='Tweed Verve'
                                    rating={4}
                                    price={1400} />
                                <ProductCard grid={grid}
                                    imageSrc='images/pop3.png'
                                    hoverImageSrc='images/pop3.png'
                                    brand='Levis'
                                    title='Leather Trim'
                                    rating={5}
                                    price={190} />
                                <ProductCard grid={grid}
                                    imageSrc='images/pop5.png'
                                    hoverImageSrc='images/pop5.png'
                                    brand='Guess'
                                    title='Monogram'
                                    rating={5}
                                    price={160} />
                                <ProductCard grid={grid}
                                    imageSrc='images/pop1.png'
                                    hoverImageSrc='images/pop1.png'
                                    brand='Mango'
                                    title='Fil Coupe'
                                    rating={5}
                                    price={130} />
                                <ProductCard grid={grid}
                                    imageSrc='images/sp3.png'
                                    hoverImageSrc='images/sp3.png'
                                    brand='Chanel'
                                    title='Luxury Chic'
                                    rating={4}
                                    price={1150} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ViewShop;