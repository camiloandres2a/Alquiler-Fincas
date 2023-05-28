import React from 'react';
import './style/CardStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardList({image, title, description, price}) {
  return (
    <div className="card-list">
        <div className="farm-card" >
        <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    </div>
  );
}

export default CardList;