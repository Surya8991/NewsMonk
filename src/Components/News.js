import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {
  // Constructor
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  // Component did mount to fetch news from api

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d500198c03734116b3ccafde846d78e2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d500198c03734116b3ccafde846d78e2&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d500198c03734116b3ccafde846d78e2&page=${this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  // Setting Default Props


  render() {
    // setting default Props
    News.defaultProps = {
      country:"in",
      category:"general",
      pageSize:5
    }
    News.propTypes={
      country:PropTypes.string,
      category:PropTypes.string,
      pageSize:PropTypes.number
    }
    return (
      <>
        <div className="container my-3">
          <h1 className="heading">NewsMonk-Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-6 col-lg-4 cardBody" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 100)}
                    description={
                      element.description
                        ? element.description.slice(0, 200)
                        : "                                                                                          "
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    url={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
            >
              ⬅ Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            >
              Next ➡
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
