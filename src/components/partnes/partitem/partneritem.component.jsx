import React from 'react'
import './partneritem.component.css';

function PartnerItem({img}) {
    return (
        <div className="item">
            <div className="card">
                <img src={img} 
                className="" 
                alt="..."/>
            </div>
         </div>
      
    )
}

export default PartnerItem
