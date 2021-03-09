import React from 'react'
import './partneritem.component.css';

function PartnerItem({img}) {
    return (
        <div className="item col-md-12 mt-4">
            <div className="card">
                <img src={img} 
                className="card-image" 
                alt="..."/>
            </div>
         </div>
      
    )
}

export default PartnerItem
