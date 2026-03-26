import React from 'react';
import image from './assets/download.png'


function Newsitems({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
      <img src={src?src:image} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"We're currently unable to display the latest news updates. Please bear with us as we work to resolve the issue. Check back soon for fresh coverage and timely information on current events"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Go to News
        </a>
      </div>
    </div>
  );
}

export default Newsitems;
