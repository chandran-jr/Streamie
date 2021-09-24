import React from 'react';
import './Videos.css';
import VideoTopics from './VideoTopics';
import YouTubeVids from './YouTubeVids';

function Videos() {
    return (
        <div className="videos">

            <VideoTopics className="videos__VideoTopics"/>

            <YouTubeVids/>
            
        </div>
    )
}

export default Videos
