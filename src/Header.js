import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {

    const [input,setInput] = useState("");

    return (
        <div className="header">
            <MenuIcon className="burger"/>
                
             <img className="yt_logo" src="https://www.depts.ttu.edu/provost/humanities-center/images/YouTubeLogo.jpg" alt="YouTube Logo" />

             <div className="searchBar__div">
             <input onChange={e => setInput(e.target.value)} value={input} placeholder="Search" className="searchBar" type="text"/>

             <Link to={`/search/${input}`}>
             <div className="searchIcon__div">
             <SearchIcon className="header__searchicon"/>
             </div>
             </Link>

             </div>

             <div className="header__icons">
                 <VideoCallIcon className="header__icon"/>
                 <AppsIcon className="header__icon"/>
                 <NotificationsIcon className="header__icon"/>
                 <Avatar className="header__icon" alt="Avatar" src="https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg" />
             </div>
        </div>
    )
}

export default Header
