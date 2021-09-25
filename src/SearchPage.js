import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';

function SearchPage() {
    return (
        <div className="searchpage">

            <div className="searchpage__filter">
                <TuneIcon className="searchpage__filtericon"/>
                <h4>FILTERS</h4>
            </div>

            <hr className="searchpage__hr"/>

            <a href="https://www.youtube.com/channel/UC2F7dFqZms_EWIUhfYdc3jA">

            <div className="searchpage__channel">

                <Avatar className="searchpage__avatar" src="https://yt3.ggpht.com/uSmUdxrtDxnc7PiCHZ9j3ZVMYU9HNsDiVgRs04oVhJdJyb1ODEzQSfHA78HgN9oLPuPHEtmPxQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="channel"/>    

                <div className="searchpage__channelDesc">
                        <h3>DevBees</h3>
                        <p>138 subscribers . 45 videos</p>
                        <p>Hey guys, Welcome to DevBees, a small <br/>software development education channel</p>
                </div>

                <Button className="searchpage__subscribe" variant="contained">SUBSCRIBE</Button>

                <NotificationsIcon className="searchpage__notification"/>

            </div>

            </a>

            <hr className="searchpage__hr2"/>

        </div>
    )
}

export default SearchPage
