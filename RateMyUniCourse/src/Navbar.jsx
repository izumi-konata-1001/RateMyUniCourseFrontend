import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';

import './css/Navbar.css'

function Navbar(){
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleMenu = function turnMenuVisible() {
        setMenuVisible(!isMenuVisible);
    };
    return(
        <div className="NavbarContainer">
            <div className="NavbarHeader">
                <p className="WebsiteTitle">Rate your Uni-Course</p>
                <div className="NavbarButton" onClick={handleMenu}>
                    <TfiMenu className="MenuIcon"/>
                </div>
            </div>
            <div className={`NavbarLinkContainer ${isMenuVisible ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/universities">Universities</Link>
                <Link to="/user">User</Link>
            </div>
        </div>
    )
}

export default Navbar;