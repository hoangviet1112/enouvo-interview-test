import "./CustomButton.scss"
import React from 'react'

const CustomButton = (props) => {
    return (
        <button onClick={props.onLoadMore} className={`${props.inBrown ? "in-brown" : ""} ${props.isDropdown ? "in-dropdown" : ""} ${props.isInOpen ? "in-open" : ""} ${props.inSearch ? "in-search" : ""} ${props.inLoading ? "in-loading" : ""} ${props.isFilter ? "filter" : ""} ${props.inBlack ? "in-black" : ""} custom-button`} >
            {props.children}    
        </button>
    )
}

export default CustomButton
