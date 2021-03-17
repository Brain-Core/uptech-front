import React from 'react'
import PartnerItem from './partitem/partneritem.component';
import './partner.component.css';
import altech from '../../assets/altech.png'
import altechlogo from '../../assets/altechlogo.png'
// import Carousel from 'react-elastic-carousel';

function Partner() {
    return (
        <div style={{
            marginTop:'50px',
            marginBottom:'50px'
        }} className="container">
            <h1 className="text-center">Our Partners</h1>
            <div className="row">
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            <PartnerItem
                img={altech}
                />
                <PartnerItem
                img={altechlogo}
                />
            </div>
            {/* <Carousel itemsToShow={3}>
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
            </Carousel> */}
        </div>
    )
}

export default Partner
