import React from 'react';
import './Header.css';

function Header (props) {

    return (
        <div className="header">
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}

export default Header;