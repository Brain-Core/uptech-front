import React from 'react'
import About from './about/about.component'
import Banner from './banner/banner.compenent'
import './home.component.css';
import Map from './map/map.component';
import 'leaflet/dist/leaflet.css';

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__separator">
                <h1>About UP-Tech</h1>
            </div>
            <About/>
            <Map/>
        </div>
    )
}

export default Home
