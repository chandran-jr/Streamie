import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

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

             <div className="header__icons">
                 <VideoCallIcon/>
                 <AppsIcon/>
                 <NotificationsIcon/>
                 <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/11/05/0c/11050c5daab38e515f788abbf474e795.jpg" />
             </div>
        </div>
    )
}

export default Header
