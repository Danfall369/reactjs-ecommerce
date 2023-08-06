import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'

function Rout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </>
    )
}

export default Rout