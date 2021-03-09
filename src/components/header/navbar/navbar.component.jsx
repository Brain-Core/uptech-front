import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.component.css';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link text-light font-weight-bold active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/impact">Impacts</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/partner">Partnes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="#">OurTeam</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="#">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar
