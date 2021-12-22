import "./DropDown.scss"
import React from 'react'
import { useState } from "react"

const DropDown = (props) => {
    const [isToggled, setIsToggled] = useState(false)
    
    function handleToggleList() {
        setIsToggled(prevValue => {
            return !prevValue
        })    
    }
    
    return (
        <div className={`${props.isFilter ? "in-filter" : ""} ${props.isInOpen ? "in-open" : ""} drop-down`}>
            <button onClick={handleToggleList} className="drop-down-header">
                {props.title}
                {
                isToggled ? 
                (<i class="fas fa-chevron-circle-up fa-lg"></i>)
                :
                (<i class="fas fa-chevron-circle-down fa-lg"></i>)
                }
            </button>
            {
                isToggled && (
                    <div className="drop-down-list">
                        {
                            props.list.map(item => (
                                <button className="list-item" key={item.id}>
                                    {item.title}
                                </button>
                            ))
                        }
                    </div>
                )
            }    
        </div>
    )
}

export default DropDown
