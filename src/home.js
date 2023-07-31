import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'

const Home = () => {
    return (
        <>
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>Los Mejores Productos Al Mejor Precio</h2>
                        <Link to='/product' className='link'>Comprar <BsArrowRight /></Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/SlideImg.png' alt='SlideImage' width="500px" />
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/Product (1).jpg' alt='Products' />
                        </div>
                        <div className='detail'>
                            <p>62 Productos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FiTruck />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home