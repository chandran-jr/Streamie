import React from 'react';
import './SideIcon.css';

function SideIcon({selected,icon, text}) {
    return (
        <div className={`sideicon ${selected && "selected"}`}>
          <div className="sideicon__icon">
          {icon}
          </div>
          <h3 className="sideicon__text">{text}</h3>
        </div>
    )
}

export default SideIcon
