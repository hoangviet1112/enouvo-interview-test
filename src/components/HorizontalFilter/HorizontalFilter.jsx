import "./HorizontalFilter.scss"

import React from 'react'
import Filter from "../Filter/Filter"
import Open from "../Open/Open"

const HorizontalFilter = () => {
    return (
        <div className="horizontal-filter">
            <Filter /> 
            <hr style={{
                padding: "0",
                margin: "0",
                width: "100%",
                border: "none",
                borderTop: "0.5px solid #353945",
                borderBottom: "0.5px solid #353945"
            }}/>
            <Open />   
        </div>
    )
}

export default HorizontalFilter
