import "./Footer.scss"
import React from 'react'
import CustomButton from "../CustomButton/CustomButton"

const Footer = () => {
    function handleSubmit(event) {
        
    }
    
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="top-bar">
                    <div className="logo">
                        <div className="logo-top">
                            <i class="fab fa-battle-net fa-2x"></i>
                            <p>Crypter</p>
                        </div>
                        <div className="logo-bottom">
                            <p>The New Creative Economy.</p>
                        </div>        
                    </div>
                    <div className="stacks">
                        <p>Stacks</p>
                        <div className="stacks-link">
                            <a href="abc">Discover</a>
                            <a href="lmn">Connect wallet</a>
                            <a href="xyz">Create item</a>
                        </div>
                    </div>
                    <div className="info">
                        <p>Info</p>
                        <div className="info-link">
                            <a href="abc">Download</a>
                            <a href="lmn">Demo</a>
                            <a href="xyz">Support</a>
                        </div>    
                    </div>
                    <div className="email">
                        <p id="p-1">Join Newsletter</p>
                        <p id="p-2">Subcribe our newsletter to get more free design course and resource</p>    
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Enter your email" />
                            <CustomButton><i class="fas fa-arrow-right"></i></CustomButton>
                        </form>
                    </div>   
                </div>
                <div className="bottom-bar">
                    <hr style={{
                        padding: "0",
                        margin: "0",
                        width: "100%",
                        border: "none",
                        borderTop: "0.5px solid #353945",
                        borderBottom: "0.5px solid #353945"
                    }}/>
                    <div className="bottom-bar-content">
                        <div className="bottom-bar-content-left">
                            <p>Copyright &copy; 2021 UI8 LLC. All rights reserved</p>
                        </div>
                        <div className="bottom-bar-content-right">
                            <p id="p-1">We use cookies for better service.</p>
                            <p id="p-2">Accept</p>
                        </div>    
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Footer
