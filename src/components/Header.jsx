import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to={"/"}>
            <h1>Film List</h1>
            </Link>
            
            <Link to={"/wish-list"}>
                <h2>Wish List</h2>
            </Link>
        </div>
    )
}

export default Header