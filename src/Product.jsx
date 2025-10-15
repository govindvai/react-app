import React from 'react'

export const Product = ({productData}) => {
    const {title, thumbnail, price, discountPercentage} = productData;

  return (
    <div style={{margin:'2rem', padding:'2rem', border: '1px solid black', borderRadius: '5px'}}>
        <img src={thumbnail} alt={title} />
        <h1>{title}</h1>
        <h2>Rs. {price} - discount of {discountPercentage}</h2>
    </div>
  )
}
