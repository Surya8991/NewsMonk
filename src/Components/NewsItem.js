// Imports React from a React component
import React from 'react'

const NewsItem = (props) => {
    // Fetches the data from News Component and gets updated accordingly
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        // Card Component for displaying each article
        <div className="my-3">
            <div className="card">
                {/* Displaying the Source of Article */}
                <div style={{
                    display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {author ? author : "Google"} </span>
                </div>
                {/* Displaying Img,Title,description,and link for the article */}
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem