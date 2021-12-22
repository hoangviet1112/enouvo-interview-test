import "./NavBar.scss"
import React from 'react'
import NavContent from "../NavContent/NavContent"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavContent />
            <hr style={{
                padding: "0",
                margin: "0",
                width: "100%",
                border: "none",
                borderTop: "0.5px solid #353945",
                borderBottom: "0.5px solid #353945"
            }}/>               
        </div>
    )
}

export default NavBar
