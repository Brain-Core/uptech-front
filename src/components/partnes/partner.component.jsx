import React from 'react'
import PartnerItem from './partitem/partneritem.component';
import './partner.component.css';
import somban from '../../assets/sombabien.png'

function Partner() {
    return (
        <div style={{
            marginTop:'150px',
            marginBottom:'150px'
        }} className="container">
            <h1>Our Partners</h1>
            <div className="column">
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
                <PartnerItem
                img={somban}
                />
            </div>
        </div>
    )
}

export default Partner
