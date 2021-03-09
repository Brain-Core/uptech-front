import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.component.css';

function Footer() {
    return (
        <footer className="footer bg-blue">
            <div className="container footer__contact">
               <div className="footer__contactPhoneAndMail">
                   <div className='footer__contactPhone'>
                       <Link className='footer__link font-weight-bold '>Nurushare Agro</Link><h7 className='bar'> | | </h7>
                       <Link className='footer__link font-weight-bold '>+233 24 152 8799</Link>
                   </div>
                   <div className="footer__contactMail">
                       <Link className='footer__link font-weight-bold'>© Nukushare Agro 2021</Link>
                   </div>
               </div>
           </div>
           <div className="container footer__social">
                <Link className='text-white footer__socialMedioLink'>
                    <FacebookIcon/>
                </Link>
                <Link className='text-white footer__socialMedioLink'>
                    <TwitterIcon/>
                </Link >
                <Link className='text-white footer__socialMedioLink'>
                    <InstagramIcon/>
                </Link>
                <Link className='text-white footer__socialMedioLink'>
                    <YouTubeIcon/>
                </Link>
                <Link className=' text-white footer__socialMedioLink'>
                    <LinkedInIcon/>
                </Link>
           </div>
        </footer>
    )
}

export default Footer
