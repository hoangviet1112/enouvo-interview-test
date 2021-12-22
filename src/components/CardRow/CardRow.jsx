import "./CardRow.scss"
import React from 'react'
import CardItem from "../CardItem/CardItem"

const CardRow = (props) => {
    return (
        <div className="card-row">
            {
                props.renderData.map(item => {
                    return <CardItem key={item.id} imgUrl="https://p4.wallpaperbetter.com/wallpaper/560/107/690/2017-c300-mercedes-benz-sport-wallpaper-preview.jpg" data={item} />
                })
            }
        </div>
    )
}

export default CardRow
