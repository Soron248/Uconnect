import React from 'react'
import './LogoSearch.css';

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <div className="Logo">U<span className="logoName">C</span></div>
            <div className="Search">
                <input type="text" name="" id="" placeholder='#Explore'/>
                <div className="s-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        
    )
}

export default LogoSearch