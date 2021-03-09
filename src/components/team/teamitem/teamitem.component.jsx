import React from 'react'

function TeamItem({img,name,position}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center">
            <img
            style={{
                width:'50%'
            }}
            className="img-fluid"
             src={img} 
             alt="img_name"/>
            <p className="font-weight-bold">{name}</p>
            <p className="small">{position}</p>
        </div>
    )
}

export default TeamItem
