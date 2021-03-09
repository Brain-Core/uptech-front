import React from 'react'
import './banneritem.component.css';

function BannerItem({image}) {
    return (
        <div class="carousel-item active">
        <img style={{
          height: '100vh',
          objectFit:'contain'
        }} src={image} 
        className="d-block w-100" alt="..."/>
      </div>
    )
}

export default BannerItem
