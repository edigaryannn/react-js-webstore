import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <div className='main-head' style={{backgroundImage: 'url(https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwe5ff82b0/TAG_Heuer_Carrera/WBN2311.BA0001/WBN2311.BA0001_USP1.jpg)'}}>
                <h1>Welcome to our website</h1>
                <h2>Watch our newest watches</h2>    
            </div>   
            <div className='main-div'>
                <div className='collections'>
                    <h1 className='col-h1'>Collections</h1>
                    <div className='col-items'>

                        <div className='col-item'>
                            <NavLink to="/collections">
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw6b19e832/TAG_Heuer_Carrera/CBS2210.FC6534/CBS2210.FC6534_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>

                            <div className='col-cont'>
                                <h4>Carrera collection</h4>
                                <span>View all watches</span>
                            </div>
                            </NavLink>
                        </div>
                        
                        
                        <div className='col-item'>
                        <NavLink to="/collections">
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw0bb6c202/TAG_Heuer_Formula_1/CAZ101AL.FT8052/CAZ101AL.FT8052_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>Formulla 1 collection</h4>
                                <span>View all watches</span>
                            </div>
                        </NavLink>
                        </div>

                        <div className='col-item'>
                        <NavLink to="/collections">
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw6cfd0be5/TAG_Heuer_Monaco/CBL2182.FT6235/CBL2182.FT6235_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>monaco collection</h4>
                                <span>View all watches</span>
                            </div>
                        </NavLink>
                        </div>

                        <div className='col-item'>
                        <NavLink to="/collections">
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwc1420c5d/TAG_Heuer_Autavia/WBE511A.BA0650/WBE511A.BA0650_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>Autavia collection</h4>
                                <span>View all watches</span>
                            </div>
                        </NavLink>
                        </div>

                    </div>
                </div>


                <div className='ac-cont'>
                    <div className='ac-text'>
                        <h1>choose the right watch for you</h1>
                        <h2>we present our watches for different ages of people, <br />also for both genders</h2>
                    </div>

                    <div className='ac-div'>
                        <div className='ac-div-items'>
                            <div className='ac-div-item'>
                                <img className='ac-item-img' src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw1e045158/TAG_Heuer_Carrera/WBN2313.BA0001/WBN2313.BA0001_0314.png?impolicy=cropresize&width=448&height=340' alt='' />
                                <h4>Watches for women</h4>
                                <h6>Discover</h6>
                            </div>
                            <div className='ac-div-item'>
                                <img className='ac-item-img' src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwfbb63f5b/TAG_Heuer_Carrera/WBN2311.BA0001/WBN2311.BA0001_0314.png?impolicy=cropresize&width=448&height=340' alt='' />
                                <h4>Watches for men</h4>
                                <h6>Discover</h6>
                            </div>
                            <div className='ac-div-item'>
                                <img className='ac-item-img' src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw9de59ca8/TAG_Heuer_Formula_1/CAZ101AT.BA0842/CAZ101AT.BA0842_0314.png?impolicy=cropresize&width=448&height=340' alt='' />
                                <h4>Watches for child</h4>
                                <h6>Discover</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}