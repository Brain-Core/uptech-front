import React from 'react'
import poule from '../../../assets/Rectangle2.png'
import agro from '../../../assets/agro.jpg'
import vegetable from '../../../assets/agro2.png'
import BannerItem from './banneritem.component'
import './banner.component.css';


function Banner() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
         <BannerItem image={poule}/>
         <BannerItem image={agro}/>
         <BannerItem image={vegetable}/>
        </div>
      </div>
    )
}

export default Banner
