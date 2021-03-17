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
                name='Hope TUMAINI IDI'
                position='CEO & Business Manager'
                />
                 <TeamItem
                img={ellipse}
                name='Prince BALUME NGABOYEKA'
                position='Operation Manager'
                />
                 <TeamItem
                img={ellipse}
                name='John Doe'
                position='Accountant'
                />
                 <TeamItem
                img={ellipse}
                name='John Doe'
                position='Accountant'
                />
                 <TeamItem
                img={ellipse}
                name='John Doe'
                position='Accountant'
                />
                 <TeamItem
                img={ellipse}
                name='John Doe'
                position='Accountant'
                />
            </div>
        </div>
    )
}

export default Team
