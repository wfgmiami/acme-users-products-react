import React, { Component } from 'react';

import ProductListItem from './ProductListItem.js';

//const ProductForm = ({ products, onDelete })=> (
class ProductForm extends Component{
  constructor(props){
    super();
    this.state = {
      name:''
    };
    this.onProductAdd = this.onProductAdd.bind(this);
  }

  onProductAdd(ev){
    this.setState( { name: ev.target.value })
  }

  render(){
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" value={ this.state.name } onChange={ this.onProductAdd } ></input><br/>

          <button className="btn btn-primary" onClick={ () => this.props.onProductSave(this.state.name) }>Save</button><br/><br/>

          <ProductListItem products={ this.props.products } onDelete={ this.props.onDelete }/>
        </div>
      </form>
    )
  }

}

export default ProductForm;
