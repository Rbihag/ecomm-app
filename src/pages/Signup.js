import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container.js'
import CustomInput from '../components/CustomInput.js'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice.js'



const signUpSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required").email("Must be a valid email"),
    mobile: yup.string().required("Mobile No. is required"),
    password: yup.string().required("Password is required"),
});


const Signup = () => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            dispatch(registerUser(values));
        },
    });


    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-30'>
                                <CustomInput
                                    type='text'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange('firstName')}
                                    onBlur={formik.handleBlur('firstName')}
                                />
                                <div className='error'>
                                    {formik.touched.firstName && formik.errors.firstName}
                                </div>
                                <CustomInput
                                    type='text'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange('lastName')}
                                    onBlur={formik.handleBlur('lastName')}
                                />
                                <div className='error'>
                                    {formik.touched.lastName && formik.errors.lastName}
                                </div>
                                <CustomInput
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput
                                    type='tel'
                                    name='mobile'
                                    placeholder='Mobile Number'
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange('mobile')}
                                    onBlur={formik.handleBlur('mobile')}
                                />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                                <CustomInput
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                />
                                <div className='error'>
                                    {formik.touched.password && formik.errors.password}
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
            </Container>
        </>
    )
}

export default Signup