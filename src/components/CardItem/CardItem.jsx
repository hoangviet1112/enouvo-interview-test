import "./CardItem.scss"
import React from 'react'
import Avatar from "../Avatar/Avatar"

const CardItem = (props) => {
    return (
        <div className="card-item">
            <div className="item-img">
                <img alt="" src={props.imgUrl} />        
            </div>
            <div className="item-info">
                <div className="title-price">
                    <p>Amazing Digital Art</p>
                    <div className="price">
                        <p>2.45 ETH</p>
                    </div>    
                </div>
                <div className="owner">
                    <div className="avatars">
                        <Avatar />
                        <Avatar />
                        <Avatar />
                    </div>
                    <p>3 in stock</p>    
                </div>
                <hr style={{
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    border: "none",
                    borderTop: "0.5px solid #353945",
                    borderBottom: "0.5px solid #353945"
                }}/>
                <div className="bid">
                    <div className="highest-bid">
                        <i class="fas fa-poll"></i>
                        <p id="p-1">Highest bid</p>
                        <p id="p-2">0.001 ETH</p>    
                    </div>
                    <div className="update">
                        <p>New bid</p>
                        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/9/99/FireIcon.svg" />
                    </div>
                </div>    
            </div>    
        </div>
    )
}

export default CardItem
