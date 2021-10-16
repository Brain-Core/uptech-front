import React, {useEffect, useState} from 'react'
import PartnerItem from './partitem/partneritem.component';
import axios from 'axios';
import './partner.component.css';
// import altech from '../../assets/altech.png'
import altechlogo from '../../assets/altechlogo.png'
// import Carousel from 'react-elastic-carousel';

function Partner() {
    const [partners, setPartners] = useState([]);

    useEffect(async() => {
        const response = await axios.get('https://uptech-admin.herokuapp.com/partners');
        setPartners(response.data);
    }, [])


    return (
        <div className="patner">
            <h1 className="text-center">Our Patners</h1>
        <div className="container patner__center">
            <div className="row">
            {/* <PartnerItem
                img={altech}
                /> */}
                {partners.map((partner, i)=>(
                     <PartnerItem
                     key={i}
                     img={partner.logo}/>
                ))}
               
                
            {/* <PartnerItem
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
                /> */}
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
