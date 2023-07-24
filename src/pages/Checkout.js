import React from 'react'

const Checkout = () => {
    return (
        <>
            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Ara Ukay Alaminos</h3>
                                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>
                                    Contact Information
                                </h4>
                                <p className='user-details'>rbihag (rbihag@icloud.com)</p>
                                <form action='' className='d-flex  flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select name='' className='form-control form-select' id='' ></select>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                    <div>
                                        <select name='' className='form-control form-select' id='' ></select>
                                    </div>
                                    <div>
                                        <input type='text' className='form-control'></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout