import React from 'react';
import './Navbar.css';
const Navbar = () =>{
    return (
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
            <i className="fa fa-bars"></i>
            </label>
            <label className="logo">
                ProjectGeek
            </label>
                <ul>
                    <li><a>PROJECTS</a></li>
                    <li><a>REQUIREMENT</a></li>
                    <li><a>SEARCH</a></li>
                </ul>
            
        </nav>
    )
}
export default Navbar;