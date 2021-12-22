import "./UserDropdown.scss"
import React from 'react'
import CustomButton from "../CustomButton/CustomButton"

const UserDropdown = () => {
    return (
        <div className="user-dropdown">
            <div className="wallet-info">
                <div className="user-name">
                    <h2>Enrico Cole</h2>
                    <p>920138dsfnjsd03..32173</p><i class="fas fa-wallet"></i>
                </div>
                <div className="balance">
                    <div className="balance-info">
                        <div className="balance-logo">
                            <i class="fab fa-ethereum fa-2x"></i>
                        </div>
                        <div className="balance-wallet">
                            <p>Balance</p>
                            <h2>4.689 ETH</h2>
                        </div>
                    </div>
                    <CustomButton isDropdown>Manage fund on Coinbase</CustomButton>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-item-1">
                    <i class="far fa-user"></i>
                    <p>My profile</p>
                </div>
                <hr style={{
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    border: "none",
                    borderTop: "0.5px solid #353945",
                    borderBottom: "0.5px solid #353945"
                }}/>
                <div className="menu-item-2">
                    <i class="far fa-image"></i>
                    <p>My items</p>
                </div>
                <hr style={{
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    border: "none",
                    borderTop: "0.5px solid #353945",
                    borderBottom: "0.5px solid #353945"
                }}/>
                <div className="menu-item-3">
                    <i class="far fa-lightbulb"></i>
                    <p>Dark theme</p>
                </div>
                <hr style={{
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    border: "none",
                    borderTop: "0.5px solid #353945",
                    borderBottom: "0.5px solid #353945"
                }}/>
                <div className="menu-item-4">
                    <i class="fas fa-sign-out-alt"></i>
                    <p>Disconnect</p>
                </div>
            </div>
            <div className="additional-info">
                <div className="letters">
                    <div className="letter-1">
                        <p>920138dsfnjsd03..32173</p>
                        <i class="fas fa-wallet"></i>
                    </div>
                    <div className="letter-2">
                        <p>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany.</p>
                    </div>
                    <div className="letter-3">
                        <i class="fas fa-globe"></i>
                        <a href="https://ui8.net">https://ui8.net</a>
                    </div>
                </div>
                <div className="buttons">
                    <CustomButton>Follow</CustomButton>
                    <CustomButton inBrown><i class="fas fa-upload"></i></CustomButton>
                    <CustomButton inBrown>...</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default UserDropdown
