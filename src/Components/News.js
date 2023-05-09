// Importing useEffect and useState
import React, { useEffect, useState } from 'react'

// Importing components
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

// Importing InfiniteScroll Component
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    // UseState to store the articles
    const [articles, setArticles] = useState([])
    // Loading Component for Articles
    const [loading, setLoading] = useState(true)
    // To set the no. of articles per page
    const [page, setPage] = useState(1)
    // To check the number of articles per page
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        // API Url to fetch news and update news based on category
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        // fetching new news
        let data = await fetch(url);
        props.setProgress(30);
        // Parse the news data to json and make it readable
        let parsedData = await data.json()
        props.setProgress(70);
        // Setting Articles and no. of articles fetched from API
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    // fetch the articles and make sure news are loaded when website is starting up
    useEffect(() => {
        // To set Title of page based on category
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonk 📰`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    // This function is used when the user scrolls down and needs to news
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // Increase the page size by one
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonk - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {/* To Display Loading when Data is being fetched */}
            {loading && <Spinner />}
            {/* Infinte Scroll */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                {/* NewsItem and data are sended to newsItem to display */}
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/img/2023/01/31/1600x900/Breaking-News-Live-Blog-pic_1627344775185_1675123654673_1675123654673.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

// Default no. of articles to show , categories , and country
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News