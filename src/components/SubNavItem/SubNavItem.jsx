import "./SubNavItem.scss"
import React from 'react'

const SubNavItem = (props) => {
    return (
        <div className={`${props.isAllItem ? "all-item" : ""} sub-nav-item`}>
            {props.title}
        </div>
    )
}

export default SubNavItem
