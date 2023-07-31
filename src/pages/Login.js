import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container.js'
import CustomInput from '../components/CustomInput.js'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice.js'

const loginSchema = yup.object({
    email: yup.string().required("Email is required").email("Must be a valid email"),
    password: yup.string().required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values));
            navigate('/')
        },
    });
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-30'>
                                <div>
                                    <CustomInput
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                    />
                                    <div className='error'>
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                    <CustomInput
                                        className='mt-3'
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        onChange={formik.handleChange('password')}
                                        onBlur={formik.handleBlur('password')}
                                        value={formik.values.password}
                                    />
                                    <div className='error'>
                                        {formik.touched.password && formik.errors.password}
                                    </div>
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/sign-up' className='button signup'>Sign Up</Link>
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

export default Login