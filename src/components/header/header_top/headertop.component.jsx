import React from 'react'
import logo from '../../../assets/logo.png';
import NavBar from '../navbar/navbar.component';
import './headertop.component.css';

function HeaderTop() {
   
    
    return (
        <header className="header fixed-top">
            <div className="header__top">
                <img
                 src={logo}
                 style={{
                     width:'140px',
                     objectFit:'contain'
                 }}
                  alt="..."/>
                <p className="header__mail">info@up-tech.com</p>
                <p>+243 823 751 631</p>
            </div>
            <div>
                <NavBar/>
            </div>
        </header>
    )
}

export default HeaderTop
