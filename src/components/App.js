import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import About from '../pages/About';
import Collections from '../pages/Collections';
import { useState } from 'react';
import { properties } from './Context';

import '../css/main.css'


function App() {

    const [loader, setLoader] = useState(false);

    const elements = {
        loader, setLoader,
      }

        return(
            <><properties.Provider value={elements}>
            <Header />
            
                <Routes>

                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/collections' element={<Collections />}></Route>

                </Routes>
                <Footer /> 
                </properties.Provider>
            </>
        )

        
    }
    

export default App;