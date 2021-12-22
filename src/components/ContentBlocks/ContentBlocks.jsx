import "./ContentBlocks.scss"

import React from 'react'
import CustomButton from "../CustomButton/CustomButton"

const ContentBlocks = () => {
    return (
        <div className="content-blocks">
            <p>create, explore, & collect digital art nfts.</p>
            <h1>The new creative economy.</h1>
            <CustomButton inSearch inBlack>Start your search</CustomButton>    
        </div>
    )
}

export default ContentBlocks
