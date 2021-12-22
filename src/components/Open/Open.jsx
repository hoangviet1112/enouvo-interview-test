import "./Open.scss"
import React from 'react'
import DropDown from "../DropDown/DropDown"
import Slider from "../Slider/Slider"
import CustomButton from "../CustomButton/CustomButton"

const Open = () => {
    return (
        <div className="open-section">
            <div className="open">
                <div className="dropdown">
                    <p>PRICE</p>
                    <DropDown isInOpen title="Highest price" />
                </div> 
                <div className="dropdown">
                    <p>LIKES</p>
                    <DropDown isInOpen title="Most liked" />
                </div>
                <div className="dropdown">
                    <p>CREATOR</p>
                    <DropDown isInOpen title="Verified only" />
                </div>
                <div className="slider">
                    <Slider />        
                </div>   
            </div>
            <div className="responsive-section">
                <DropDown isInOpen title="Recently added" />
                <DropDown isInOpen title="All items" />
                <CustomButton isInOpen>Advanced Filter</CustomButton>
            </div>
        </div>
    )
}

export default Open
