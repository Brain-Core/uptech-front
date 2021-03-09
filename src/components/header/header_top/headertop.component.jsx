import React,{useState, useEffect} from 'react'
import logo from '../../../assets/logo.png';
import NavBar from '../navbar/navbar.component';
import './headertop.component.css';

function HeaderTop() {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false)
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, []); 
    
    return (
        <header className="header fixed-top">
            <div className="header__top">
                <img src={logo} alt="..."/>
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
