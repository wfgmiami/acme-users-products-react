import React from 'react';


const brStyle = { clear: "both" }

const ProductListItem = ({ products, onDelete }) => (

  <ul className="list-group">

    { products.map( (product,id) =>
      <li key={ id } className="list-group-item">{ product.name }
        <button className="btn btn-warning pull-right" onClick = { ()=> onDelete(product.id) }>Delete</button>
        <br style = { brStyle }/>
      </li>
    )}
  </ul>
)


export default ProductListItem;
