import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className="header">
            <MenuIcon className="burger"/>
             <img className="yt-logo" src="https://www.depts.ttu.edu/provost/humanities-center/images/YouTubeLogo.jpg" alt="YouTube Logo" />
            <input type="text"/>
        </div>
    )
}

export default Header
