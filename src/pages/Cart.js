import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <Meta title={'Cart'} />
            <BreadCrumb title='Cart' />
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header py-3 d-flex justify-content-between align-items-center '>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center '>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='/images/sprod12.png' className='img-fluid' alt='product' />
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='title'>Alma BB</h5>
                                        <p className='color'>Color: Gold</p>
                                        <p className='size'>Size: Medium</p>

                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>&#8369; 2,370</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div><input type='number'
                                        style={{ width: "70px" }}
                                        name=''
                                        min={1}
                                        max={10}
                                        className='form-control'
                                        id='' /></div>
                                    <div className='fs-4'>
                                        <MdDelete className='text-danger' />
                                    </div>
                                </div>
                                <div className='cart-col-4'><h5 className='price'>&#8369; 2,370</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='col-12 py-2 mt-4'>
                                <div className='d-flex justify-content-between align-items-baseline'>
                                    <Link to='/shop' className='button'>Continue Shopping</Link>
                                    <div className='d-flex flex-column align-items-end'>
                                        <h4>SubTotal: &#8369; 2,370</h4>
                                        <p>Taxes and shipping fees are calculated during checkout</p>
                                        <Link to='/checkout' className='button'>Check Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart