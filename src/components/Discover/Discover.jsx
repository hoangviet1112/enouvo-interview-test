import "./Discover.scss"

import React, {useState, useEffect} from 'react'
import HorizontalFilter from "../HorizontalFilter/HorizontalFilter"
import CardRow from "../CardRow/CardRow"
import CustomButton from "../CustomButton/CustomButton"
import queryString from "query-string"
import axios from "axios"

const Discover = () => {
    const [filters, setFilters] = useState({
        page: 1,
        perPage: 8,
    })

    const stringUrl = queryString.stringify(filters)
    
    function handleLoadMore() {
        setFilters(prevValue => {
            return {
                ...prevValue,
                page: prevValue.page + 1,
            }
        })
    }

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [renderData, setRenderData] = useState(data)

    useEffect(() => {        
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get(`http://178.128.56.76:3003/api/v1/stores?limit=10&offset=0&${stringUrl}`)
                setData(response.results)    
            } catch (error) {
                console.log(error.message);
            }
            setLoading(false)
        }
        fetchData();
    // eslint-disable-next-line
    }, [filters])

    useEffect(() => {
        setRenderData(prevValue => {
            return [...prevValue, ...data]
        })
    }, [data])

    console.log(renderData);

    return (
        <div className="discover">
            <div className="title">
                <p>Discover</p>
            </div>
            <HorizontalFilter />
            <CardRow renderData={renderData} filters={filters} stringUrl={stringUrl} />
            {
                loading ? 
                (<CustomButton onLoadMore={handleLoadMore} inLoading inBlack>Loading more<i class="fa fa-spinner fa-spin"></i></CustomButton>)
                :
                (<CustomButton onLoadMore={handleLoadMore} inLoading inBlack>Load more</CustomButton>)
            }
            <hr style={{
                padding: "0",
                margin: "0",
                width: "100%",
                border: "none",
                borderTop: "0.5px solid #353945",
                borderBottom: "0.5px solid #353945"
            }}/>
        </div>
    )
}

export default Discover
