import React,{useState,useEffect} from 'react';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, id } = props;
  const [saved, setSaved] = useState("Save");

  useEffect(() => {
    // Check if the news item is saved in localStorage
    const savedNews = localStorage.getItem('savedNews');
    if (savedNews) {
      const savedNewsIds = JSON.parse(savedNews);
      if (savedNewsIds.includes(id)) {
        setSaved("Saved");
      }
      console.log(savedNewsIds)
    }
  }, [id]);

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/savenews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        // Update the savedNewsIds in localStorage
        const savedNews = localStorage.getItem('savedNews');
        const savedNewsIds = savedNews ? JSON.parse(savedNews) : [];
        savedNewsIds.push(id);
        localStorage.setItem('savedNews', JSON.stringify(savedNewsIds));

        setSaved("Saved");
      } else {
        throw new Error('Failed to save news.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className="badge rounded-pill bg-danger">{author ? author : 'Google'}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small>
          </p>
          <div>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <button className="btn btn-sm btn-dark save-item"  onClick={handleClick}>{saved}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
