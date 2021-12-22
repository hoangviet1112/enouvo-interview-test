import "./Slider.scss"
import React from 'react'

const Slider = () => {
    return (
        <div className="slider">
            <div className="range-bar">
                <p id="p-1">5 ETH</p>
                <p id="p-2">Price Range</p>
                <input type="range" min="0.01" max="10" value="5" />
            </div>
            <div className="values">
                <p>0.01 ETH</p>
                <p>10 ETH</p>    
            </div>        
        </div>
    )
}

export default Slider
