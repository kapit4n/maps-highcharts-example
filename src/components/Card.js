import React from 'react'

import './Card.css'

export default function Card({ title, description, images }) {
  return (
    <div className="card">
      <h3 className="card-header">
        {title}
      </h3>
      <div className="card-body">
        {description}
      </div>
      <div className="card-images">
        {images && images.map(i => (
          <div className="item">
            <img src={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: "Title",
  description: "Description goes here...",
  images: [
    "https://patterns.dev/img/reactjs/react-logo@3x.svg",
    "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png",
    "https://clickysoft.com/wp-content/uploads/2021/10/React-JS-Clickysoft.jpg",
  ]
}
