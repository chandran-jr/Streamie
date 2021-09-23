import React from 'react';
import './SideIcon.css';

function SideIcon({icon, text}) {
    return (
        <div className="sideicon">
          {icon}
          <h3 className="sideicon__text">{text}</h3>
        </div>
    )
}

export default SideIcon
