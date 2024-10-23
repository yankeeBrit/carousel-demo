import React from 'react';
import 'lazysizes';

const Card = ({ item }) => {
  switch (item.type) {
    case 'video':
      return (
        <div className="card video-card">
          <img className="lazyload" data-src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Duration: {item.duration}</p>
        </div>
      );

    case 'game':
      return (
        <div className="card game-card">
          <img className="lazyload" data-src={item.thumbnail} alt={item.gameTitle} />
          <h3>{item.gameTitle}</h3>
          <p>Date & Time: {new Date(item.dateTime).toLocaleString()}</p>
        </div>
      );

    case 'news':
      return (
        <div className="card news-card">
          <img className="lazyload" data-src={item.image} alt={item.headline} />
          <h3>{item.headline}</h3>
          <p>{item.summary}</p>
        </div>
      );

    default:
      return null;
  }
};

export default Card;
