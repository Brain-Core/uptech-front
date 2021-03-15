import React from 'react'
import PartnerItem from './partitem/partneritem.component';
import './partner.component.css';
import somban from '../../assets/sombabien.png'
import Carousel from 'react-elastic-carousel';

function Partner() {
    return (
        <div style={{
            marginTop:'150px',
            marginBottom:'150px'
        }} className="container">
            <h1 className="text-center">Our Partners</h1>
            <Carousel>
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
            </Carousel>
        </div>
    )
}

export default Partner
