import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart,HiSearch } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Header() {


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
                                    <li className='head-nav-item'><NavLink to="/">Home</NavLink></li>
                                    <li className='head-nav-item'><NavLink to="/about">About us</NavLink></li>
                                    <li className='head-nav-item'><NavLink to="/collections">Collections</NavLink></li>
                                    
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
