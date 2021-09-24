import React from 'react';
import './Video.css';
import Avatar from '@mui/material/Avatar';

function Video({avatarimg,channel,image,time,title,url,views}) {
    return (
        <div className="video">
            <a href={url} target="blank">
            <img src={image} alt="Thumbnails" className="video__Thumbnail"/>
            <h5 className="video__time">{time}</h5>
            <div className="video__info">
                <Avatar src={avatarimg} alt="logo" className="video__logo" />
                <div className="video__text">
                    <h3>{title}</h3>
                    <p>{channel}</p>
                    <p>{views} views</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Video
