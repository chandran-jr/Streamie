import React from 'react';
import './Video.css';
import Avatar from '@mui/material/Avatar';

function Video({image,title,channel,views,avatarimg}) {
    return (
        <div className="video">
            <img src={image} alt="Thumbnails" className="video__Thumbnail"/>
            <div className="video__info">
                <Avatar src={avatarimg} alt="logo" className="video__logo" />
                <div className="video__text">
                    <h3>{title}</h3>
                    <p>{channel}</p>
                    <p>{views} views</p>
                </div>
            </div>
        </div>
    )
}

export default Video
