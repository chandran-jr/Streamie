import React, { useEffect, useState } from 'react';
import './YouTubeVids.css';
import Video from './Video';
import db from './firebase';

function YouTubeVids() {


    const [videos,setVideos] = useState([]);

    useEffect(() => {
        db.collection("videos").onSnapshot((snapshot) => 
            setVideos(snapshot.docs.map((doc) => ({
                data: doc.data(),
                
            })
        ))
        );
    },[]);

    return (
        <div className="youtubevids">

{videos.map(({data:{avatarimg,channel,image,time,title,url,views}}) => (
                <Video
                    avatarimg={avatarimg}
                    channel={channel}
                    image={image}
                    time={time}
                    title={title}
                    url={url}
                    views={views}
                />
            ))}
             
        </div>
    )
}

export default YouTubeVids
