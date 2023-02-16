import React, { Component } from "react";
import NewsItem from "./NewsItem";

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
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d500198c03734116b3ccafde846d78e2&page=1&pageSize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults })
  }

  handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d500198c03734116b3ccafde846d78e2&page=${this.state.page - 1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })

}
 handleNextClick=async()=>{
    console.log("Next");
    if(this.state.page + 1 >Math.ceil(this.state.totalResults/10)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d500198c03734116b3ccafde846d78e2&page=${this.state.page + 1}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ page: this.state.page + 1, articles: parsedData.articles })
  }
}

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="heading">Top Headline</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-6 col-lg-4 cardBody" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 40)}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : "                                                                                          "
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
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
