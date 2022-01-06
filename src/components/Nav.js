import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'




function Nav() {


    return (
        <div >

            <ul className="w-5/6 h-11 mx-auto  bg-purple-600  grid grid-cols-4 ">
                <NavLink exact={true} to="/" className="text-white hover:text-purple-600" activeClassName="acctive" ><li className="transition duration-500 ease-in-out pt-1 pb-1  text-center  hover:bg-white  hover:shadow-2xl nav-item " ><i className='fa fa-home text-3xl'></i></li></NavLink>
                <NavLink to="/tools" className="text-white hover:text-purple-600" activeClassName="acctive"  ><li className="transition duration-500 ease-in-out pt-1 pb-1  text-center  hover:bg-white  hover:shadow-2xl nav-item" ><i className='fa fa-wrench text-3xl ' ></i></li></NavLink>
                <NavLink to="/project" className="text-white hover:text-purple-600" activeClassName="acctive"  ><li className="transition duration-500 ease-in-out pt-1 pb-1  text-center  hover:bg-white  hover:shadow-2xl nav-item"  ><i className='fa fa-file-code-o text-3xl' ></i></li></NavLink>
                <NavLink to="/contact" className="text-white hover:text-purple-600" activeClassName="acctive"  ><li className="transition duration-500 ease-in-out pt-1 pb-1  text-center  hover:bg-white  hover:shadow-2xl nav-item" ><i className='fa fa-address-book-o text-3xl' ></i></li></NavLink >

            </ul>
        </div>
    );
}

export default Nav;