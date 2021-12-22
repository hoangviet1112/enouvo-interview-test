import "./SubNav.scss"
import React from 'react'
import SubNavItem from "../SubNavItem/SubNavItem"

const SubNav = () => {
    return (
        <div className="sub-nav">
            <SubNavItem title="All items" isAllItem/>
            <SubNavItem title="Art"/>
            <SubNavItem title="Game"/>
            <SubNavItem title="Photography"/>
            <SubNavItem title="Music"/>
            <SubNavItem title="Video"/>        
        </div>
    )
}

export default SubNav
