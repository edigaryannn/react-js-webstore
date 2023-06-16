import React from 'react';
import { NavLink } from "react-router-dom";


export default function About(){

    return(
        <main>
            <div className='ab-head'>
                <h1>About our website</h1>
            </div>

            <div className='ab-cont'>
                {/* about text */}

                
                <h1>Best webstore for you!</h1>
                <div className='ab-div'>
                    <div className='ab-div-img'></div>
                    <div className='ab-text-div'>
                        <p>In our online store you can find watches for every taste and color, as well as get to know the world of watches more closely and attentively, with more interest with the help of our design solutions for the site. </p>
                        <NavLink to="/"><span>Return to home!</span></NavLink>
                        <p>In our store you can also find many different brands such as TagHeuer, Casio, Rolex, and many other famous and lesser known companies.</p>
                        <NavLink to="/"><span>Discover all brands!</span></NavLink>
                    </div>
                </div>
            </div>
        </main>
    )

};
