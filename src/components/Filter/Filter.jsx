import "./Filter.scss"

import React from 'react'
import DropDown from "../DropDown/DropDown"
import SubNav from "../SubNav/SubNav"
import CustomButton from "../CustomButton/CustomButton"

const Filter = () => {
    const item = [
        {
            id: 1,
            title: "abc"
        },
        {
            id: 2,
            title: "lmn"
        },
        {
            id: 3,
            title: "xyz"
        }
    ]
    
    return (
        <div className="filter">
            <div className="filter-dropdown">
                <DropDown isFilter list={item} title="Recently added" />
            </div> 
            <div className="filter-subnav">
                <SubNav />
            </div>
            <div className="filter-button">
                <CustomButton isFilter>Filter <i class="fas fa-times"></i></CustomButton>
            </div>   
        </div>
    )
}

export default Filter
