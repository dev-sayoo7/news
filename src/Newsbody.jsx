import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';  

function Newsbody() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setDatas(data.articles))
      .catch(err => console.error('Error fetching news:', err));
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest <span>News</span></h2>
      <div className="card-deck">
        {datas.map((news, index) => (<Newsitems 
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsbody;
