import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Wishlist from '../pages/Wishlist'
const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/wish-list' element={<Wishlist />} />
        </Routes>
    )
}

export default MyRouter