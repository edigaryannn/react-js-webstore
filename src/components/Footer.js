import React from 'react';

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
                            <li className='footer-col-item'>Rolex</li>
                            <li className='footer-col-item'>Casio</li>
                            <li className='footer-col-item'>Timex</li>
                            <li className='footer-col-item'>Higer</li>
                        </ul>
                    </div>
                    <div className='footer-div'>
                        <h4>About us</h4>
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