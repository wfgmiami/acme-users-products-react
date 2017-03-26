import React from 'react';

const brStyle = { clear: "both" }
const ProductList = ({ products }) => (
  <div>
  <h3>Products</h3>
  <form>
    <div className="form-group">
      <label>Name</label>
      <input className="form-control"></input><br/>
      <button className="btn btn-primary">Save</button><br/><br/>
      <ul className="list-group">
        <li className="list-group-item">Bar
          <button className="btn btn-warning pull-right">Delete</button>
          <br style = { brStyle }/>
        </li>
      </ul>
    </div>
  </form>
  </div>
)

export default ProductList;
