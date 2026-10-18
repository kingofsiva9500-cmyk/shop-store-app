import React from 'react'
import bannerImage from '../assets/photo/banner.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bannerImage} alt="Black Friday sale banner" />
    </div>
  )
}

export default Banner