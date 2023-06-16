import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart,HiSearch } from "react-icons/hi";
import { properties } from "./Context";
import { NavLink } from "react-router-dom";

export default function Header() {
    const { loader, setLoader } = useContext(properties);
    const [lineX, setLineX] = useState(false);

    const burgerwiThLoader = () => {
        setLoader(!loader)
        document.querySelector('.navigation > ul').classList.toggle('openNav')
        setLineX(!lineX);
    }

        return(
            <header>
                <div className='header-div'>

                    <div className='head-line'>
                        <span className='head-line-txt'>Language: en</span>
                    </div>

                    <div className='head-nav'>
                        <div className='head-nav-table'>
                            <nav className="navigation">
                                <ul className='head-nav-ul'>
                                    <li className='head-nav-item' onClick={burgerwiThLoader}><NavLink to="/">Home</NavLink></li>
                                    <li className='head-nav-item' onClick={burgerwiThLoader}><NavLink to="/about">About us</NavLink></li>
                                    <li className='head-nav-item'>Timex</li>
                                    <li className='head-nav-item'>Higer</li>
                                </ul>
                            </nav>
                        </div>  

                        <div className='head-nav-options'>
                            <div className='head-nav-prof'>
                                <HiOutlineShoppingCart className='head-nav-prof-opt' />
                                <CgProfile className='head-nav-prof-opt' />
                                <HiSearch className='head-nav-prof-opt' /> 
                            </div>    
                        </div>

                    </div>

                     
                </div>
            </header>
        )

        }
