import React from 'react'
import './team.component.css';
import TeamItem from './teamitem/teamitem.component';
import ellipse from '../../assets/Ellipse1.png';

function Team() {
    return (
        <div style={{
            marginTop:'160px',
            marginBottom:'50px'
        }}
        className="container"
        >
            <h1 className="text-center mb-4">Our Team</h1>
            <div className="row">
                <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
                 <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
                 <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
                 <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
                 <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
                 <TeamItem
                img={ellipse}
                name='Arnold SWARZENEGER'
                position='Managing Director'
                />
            </div>
        </div>
    )
}

export default Team
