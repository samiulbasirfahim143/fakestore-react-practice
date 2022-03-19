import React from 'react';
import "./Nav.css"

const Nav = ({id}) => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Cart <sup>{id}</sup> </li>
                <li>About</li>
            </ul>
        </div>
    );
};

export default Nav;