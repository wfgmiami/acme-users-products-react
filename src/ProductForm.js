import React, { Component } from 'react';

//import ProductListItem from './ProductListItem.js';

class ProductForm extends Component{
  constructor(props){
    super();
    this.state = {
      name:''
    };
    this.onProductAdd = this.onProductAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onProductAdd(ev){
    this.setState( { name: ev.target.value })
  }

  handleSubmit(e){
    this.props.onProductSave(this.state.name);
    e.preventDefault();
    this.setState({ name })
  }

  render(){
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" value={ this.state.name } onChange={ this.onProductAdd } ></input>
        </div>
          <button className="btn btn-primary" onClick={ this.handleSubmit }>Save</button>
      </form>
    )
  }

}

export default ProductForm;
