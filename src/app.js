import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  }

  componentDidMount(){
    axios.get('/api/users')
    .then( response => response.data)
    .then( users => this.setState( { users }))
    .then( () => axios.get('/api/products'))
    .then( response => response.data )
    .then( products => this.setState({ products }))
    this.setState( { activePage: 'user' })
  }

  handleSelect(activePage){
    this.setState({ activePage })
    //console.log(this.state.activePage)
  }

  render(){
    //console.log(this.state.users,this.state.products)
    return (
      <Nav users={ this.state.users } products={ this.state.products } onSelect = { this.handleSelect} activePage = { this.state.activePage }/>
    )
  }
}

ReactDOM.render(
  <App />,
  root
)
