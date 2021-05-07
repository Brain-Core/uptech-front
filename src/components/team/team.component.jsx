import React from 'react'
import './team.component.css';
import TeamItem from './teamitem/teamitem.component';
import hope from '../../assets/hope.png';
import mweng from '../../assets/mweng.png';

function Team() {
    return (
        <div style={{
            marginTop:'160px',
            marginBottom:'299px'
        }}
        className="container"
        >
            <h1 className="text-center mb-4">Our Team</h1>
            <div className="row">
                <TeamItem
                img={hope}
                name='Hope TUMAINI IDI'
                position='CEO & Business Manager'
                />
                 <TeamItem
                img={mweng}
                name='Prince BALUME NGABOYEKA'
                position='CEO & Operation Manager'
                />
                 
            </div>
        </div>
    )
}

export default Team
