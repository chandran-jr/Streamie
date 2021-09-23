import React from 'react';
import './Sidebar.css';
import SideIcon from './SideIcon';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Sidebar() {
    return (
        <div className="sidebar">
            <SideIcon selected icon= {<HomeIcon/>} text="Home" />
            <SideIcon icon= {<ExploreIcon/>} text="Explore" />
            <SideIcon icon= {<SubscriptionsIcon/>} text="Subscriptions" />
            <div className="hr"></div>
            <SideIcon icon= {<VideoLibraryIcon/>} text="Library" />
            <SideIcon icon= {<HistoryIcon/>} text="History" />
            <SideIcon icon= {<OndemandVideoIcon/>} text="Your Videos" />
            <SideIcon icon= {<WatchLaterIcon/>} text="Watch Later" />
            <SideIcon icon= {<ThumbUpIcon/>} text="Liked Videos" />
            <SideIcon icon= {<KeyboardArrowDownIcon/>} text="See More" />

        </div>
    )
}

export default Sidebar
