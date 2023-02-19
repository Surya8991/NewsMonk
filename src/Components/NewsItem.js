import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url ,author,time} = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
            <div className="endCard">
            <span>{author}</span>
            <span>{time.slice(0,16)}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
