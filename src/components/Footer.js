import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className='footer-cont'>
                    <div className='footer-div'>
                        <h4>Watch Shop</h4>
                        <span>+374-94-10-30-75</span>
                    </div>
                    <div className='footer-div'>
                        <h4>Collections</h4>
                        <ul className='footer-col'>
                            <li className='footer-col-item'><NavLink to="/collections">Carrera</NavLink></li>
                            <li className='footer-col-item'><NavLink to="/collections">Formulla</NavLink></li>
                            <li className='footer-col-item'><NavLink to="/collections">Monaco</NavLink></li>
                            <li className='footer-col-item'><NavLink to="/collections">Autavia</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-div'>
                        <h4>About us</h4>
                        <ul className='footer-col '>
                            <li className='footer-col-item ftc-logo'><FaFacebookF /></li>
                            <li className='footer-col-item ftc-logo'><FaInstagram /></li>
                            <li className='footer-col-item ftc-logo'><FaTwitter /></li>
                            <li className='footer-col-item ftc-logo'><FaYoutube /></li>
                        </ul>
                    </div>
                    <div className='footer-div'>
                        <h4>Locations</h4>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;