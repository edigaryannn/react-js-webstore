import React from 'react';
import { NavLink } from "react-router-dom";


export default function About(){

    return(
        <main>
            <div className='main-head' style={{backgroundImage: 'url(https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwdb1d0cbd/TAG_Heuer_Monaco/CBL2183.FT6236/CBL2183.FT6236_USP1.jpg)', height: '600px'}}>
                <h1>Discover collections</h1>  
            </div>
            
            <div className='main-div'>
                <div className='collections'>

                        {/* carrera collection */}

                        <h1 className='col-h1'>carrera Collection</h1>
                        <div className='col-items'>                           
                            <div className='col-item'>
                                <NavLink to="/collections">
                                    <div className='col-img'>
                                        <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw6b19e832/TAG_Heuer_Carrera/CBS2210.FC6534/CBS2210.FC6534_0913.png?impolicy=producttile&height=320' alt='' />
                                    </div>

                                    <div className='col-cont'>

                                        <h4>Carrera chronograph</h4>
                                        <span className='price'>$ 3550.0</span>
                                    </div>
                                 </NavLink>
                            </div>                            
                        </div>

                        {/* formulla collection */}

                        <h1 className='col-h1'>formulla Collection</h1>
                        <div className='col-items'>                          
                            <div className='col-item'>
                            <NavLink to="/collections">
                                <div className='col-img'>
                                    <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw0bb6c202/TAG_Heuer_Formula_1/CAZ101AL.FT8052/CAZ101AL.FT8052_0913.png?impolicy=producttile&height=320' alt='' />
                                </div>
                                <div className='col-cont'>
                                    <h4>Formulla 1 collection</h4>
                                    <span>$ 3550.0</span>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                         
                        {/* monaco collection */}

                        <h1 className='col-h1'>monaco Collection</h1>
                        <div className='col-items'>
                            <div className='col-item'>
                            <NavLink to="/collections">
                                <div className='col-img'>
                                    <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw6cfd0be5/TAG_Heuer_Monaco/CBL2182.FT6235/CBL2182.FT6235_0913.png?impolicy=producttile&height=320' alt='' />
                                </div>
                                <div className='col-cont'>
                                    <h4>monaco collection</h4>
                                    <span>$ 3550.0</span>
                                </div>
                            </NavLink>
                            </div>
                        </div>

                        {/* autavia collection */}
                        <h1 className='col-h1'>autavia Collection</h1>
                        <div className='col-items'>
                            <div className='col-item'>
                                <NavLink to="/collections">
                                <div className='col-img'>
                                    <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwc1420c5d/TAG_Heuer_Autavia/WBE511A.BA0650/WBE511A.BA0650_0913.png?impolicy=producttile&height=320' alt='' />
                                </div>
                                <div className='col-cont'>
                                    <h4>Autavia collection</h4>
                                    <span>$ 3550.0</span>
                                </div>
                                </NavLink>
                            </div>                       
                       </div>
                    </div>  
                </div> 
        </main>
    )

};
