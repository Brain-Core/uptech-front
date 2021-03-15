import React from 'react'
import poule from '../../../assets/Rectangle2.png'
import agro from '../../../assets/agro.jpg'
import vegetable from '../../../assets/agro2.png'
// import BannerItem from './banneritem.component'
import './banner.component.css';


function Banner() {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={poule}
          className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={agro}className="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={vegetable} className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    )
}

export default Banner
