import React from 'react'
import PartnerItem from './partitem/partneritem.component';
import './partner.component.css';
import altech from '../../assets/altech.png'
import altechlogo from '../../assets/altechlogo.png'
// import Carousel from 'react-elastic-carousel';

function Partner() {
    return (
        <div className="patner">
            <h1 className="text-center">Our Patners</h1>
        <div className="container patner__center">
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
        </div>
    )
}

export default Partner
