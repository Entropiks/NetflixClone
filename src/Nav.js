import React, { useState, useEffect } from 'react'
import './nav.css'

function Nav() {
    // set state variables
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 75) {
                handleShow(true);
            } else handleShow(false);
        });

        // Don't forget to remove the listener
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="logo_netflix"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                alt="Netflix logo" />

            <img 
                className="user_icon"
                src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                alt="User account icon" />       
        </div>
    );
}

export default Nav;
