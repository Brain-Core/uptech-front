import React, {useState, useEffect} from 'react'
import './team.component.css';
import TeamItem from './teamitem/teamitem.component';
import axios from 'axios';

function Team() {
    const [teams, setTeams] = useState([]);

    const fetchData = async () =>{
        const response = await axios.get('https://uptech-admin.herokuapp.com/teams');
        setTeams(response.data);
    }
    useEffect(() => {
       fetchData()
    }, []) 

    return (
        <div style={{
            marginTop:'160px',
            marginBottom:'299px'
        }}
        className="container"
        >
            <h1 className="text-center mb-4">Our Team</h1>
            <div className="row">
                {teams?.map((team, i)=>(
                    <TeamItem
                    key={i}
                      img={team.avatar}
                      name={team.completeName}
                      position={team.position}
                    />
                ))}     
            </div>
        </div>
    )
}

export default Team
