import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src='images/blog1.jpg' className='img-fluid' alt='blog' />
                </div>
                <div className='blog-content'>
                    <p className='date'>17 July 2023</p>
                    <h5 className='title'>Find your style and flaunt it</h5>
                    <p className='desc'>Browse our collection of clothing and get ready to turn heads wherever you go.</p>
                    <Link to='/' className='button'>Read More</Link>
                </div>
            </div>

        </div>

    )
}

export default BlogCard