export default function Home() {
    return (
        <main>
            <div className='main-head'>
                <h1>Welcome to our website</h1>
                <h2>Watch our newest watches</h2>    
            </div>   
            <div className='main-div'>
                <div className='collections'>
                    <h1 className='col-h1'>Collections</h1>
                    <div className='col-items'>
                        <div className='col-item'>
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw25500c3e/TAG_Heuer_Aquaracer/WBP1418.BA0622/WBP1418.BA0622_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>

                            <div className='col-cont'>
                                <h5>F-1 collection</h5>
                                <span>View all watches</span>
                            </div>
                        </div>



                        <div className='col-item'>
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw25500c3e/TAG_Heuer_Aquaracer/WBP1418.BA0622/WBP1418.BA0622_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>F-1 collection</h4>
                                <span>View all watches</span>
                            </div>
                        </div>

                        <div className='col-item'>
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw25500c3e/TAG_Heuer_Aquaracer/WBP1418.BA0622/WBP1418.BA0622_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>F-1 collection</h4>
                                <span>View all watches</span>
                            </div>
                        </div>

                        <div className='col-item'>
                            <div className='col-img'>
                                <img src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw25500c3e/TAG_Heuer_Aquaracer/WBP1418.BA0622/WBP1418.BA0622_0913.png?impolicy=producttile&height=320' alt='' />
                            </div>
                            <div className='col-cont'>
                                <h4>F-1 collection</h4>
                                <span>View all watches</span>
                            </div>
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