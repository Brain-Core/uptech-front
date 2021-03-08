import React from 'react'
import './banneritem.component.css';

function BannerItem({image}) {
    return (
        <div class="carousel-item active">
        <img src={image} 
        className="d-block w-100" alt="..."/>
      </div>
    )
}

export default BannerItem
