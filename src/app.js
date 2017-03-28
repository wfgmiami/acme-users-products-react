import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Nav from './Nav';


const root = document.getElementById('app');

class App extends Component{

  constructor(){
    super();
    this.state = {
      users: [],
      products: [],
      activePage: {}
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onProductSave = this.onProductSave.bind(this);
  }

  componentDidMount(){
    axios.get('/api/users')
    .then( response => response.data)
    .then( users => this.setState( { users }))
    .then( () => axios.get('/api/products'))
    .then( response => response.data )
    .then( products => this.setState({ products }))
    this.handleSelect('product');

  }

  handleSelect(activePage){
    this.setState({ activePage })
  }

  handleDelete(id){
    const products = this.state.products.filter( product => product.id !== id)
    this.setState({ products })
    this.setState( { activePage: 'product' })
    axios.delete(`/api/products/${id}`)

  }

  onProductSave(product){
    axios.post('/api/products',{ name: product })
    .then( response => response.data)
    .then( products => this.setState( { products } ))
  }

  render(){
    return (
      <Nav users={ this.state.users } products={ this.state.products } onSelect = { this.handleSelect} activePage = { this.state.activePage } onDelete={ this.handleDelete } onProductSave = { this.onProductSave } />
    )
  }
}

render(
  <App />,
  root
)
