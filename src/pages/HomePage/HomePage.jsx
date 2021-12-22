import "./HomePage.scss"
import NavBar from "../../components/NavBar/NavBar"

import React from 'react'
import ContentBlocks from "../../components/ContentBlocks/ContentBlocks"
import Discover from "../../components/Discover/Discover"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
    return (
        <div className="home-page">
            <NavBar />
            <ContentBlocks />
            <Discover />
            <Footer />            
        </div>
    )
}

export default HomePage
