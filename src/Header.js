import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">

            <MenuIcon className="burger"/>

             <img className="yt_logo" src="https://www.depts.ttu.edu/provost/humanities-center/images/YouTubeLogo.jpg" alt="YouTube Logo" />

             <div className="searchBar__div">
             <input placeholder="Search" className="searchBar" type="text"/>
             <div className="searchIcon__div">
             <SearchIcon className="searchIcon"/>
             </div>
             </div>
        </div>
    )
}

export default Header
