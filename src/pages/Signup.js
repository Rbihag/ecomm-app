import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' className='d-flex flex-column gap-30'>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='First Name'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Last Name'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type='tel'
                                        name='mobile'
                                        placeholder='Mobile Number'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div>

                                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to='/login'>Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup