import React from 'react'
import List from '../components/List'
// import Wishlist from './Wishlist'
import Wish from '../components/Wish'

const HomePage = () => {
  return (
    <div className='home'>
     <List />
     <Wish />
    </div>
  )
}

export default HomePage