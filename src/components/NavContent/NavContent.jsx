import "./NavContent.scss"
import React from 'react'
import { useState } from "react"
import CustomButton from "../CustomButton/CustomButton"
import UserDropdown from "../UserDropdown/UserDropdown"

const NavContent = () => {
    const [inputText, setInputText] = useState("")
    const [isOpened, setIsOpened] = useState(false)

    function handleClick() {
        setIsOpened(prevValue => {
            return !prevValue
        })    
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputText);
    }
    
    return (
        <div className="nav-content">
            <div className="left-content">
                <div className="logo">
                    <i style={{marginRight: "5px"}} class="fab fa-battle-net fa-2x"></i>CRYPTER
                </div>
                <div className="hr-line" />
                <div className="left-content-link">
                    <p>Discover</p>
                    <p>How it work</p>
                </div>        
            </div>
            <div className="actions">
                <form onSubmit={handleSubmit} className="small-search-box">
                    <input onChange={e => setInputText(e.target.value)} placeholder="Search" />
                    <i style={{marginRight: "12px", color: "#777E90"}} class="fas fa-search fa-lg"></i>        
                </form>
                <div className="notification">
                    <i class="fas fa-bell fa-lg"></i>
                    <div style={{
                        position: "absolute",
                        borderRadius: "50%",
                        top: "0px",
                        right: "0px",
                        height: "10px",
                        width: "10px",
                        background: "green"
                    }} />    
                </div>
                <div className="buttons">
                    <CustomButton>Upload</CustomButton>
                    <CustomButton inBlack>Connect Wallet</CustomButton>
                </div>
                <div className="burger-icon">
                    <i onClick={handleClick} class="fas fa-align-justify fa-2x"></i>
                    {
                        isOpened ? 
                        (
                            <div className="dropdown-block">
                                <UserDropdown />
                            </div>
                        )
                        :
                        (
                            null
                        )
                    }
                </div>    
            </div>
        </div>
    )
}

export default NavContent