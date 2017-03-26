import React from 'react';
import UserList from './UserList';
import ProductList from './ProductList';

const Nav = ({ users, products, onSelect, activePage }) => (

  <div className="container">
    <ul className="nav nav-tabs">

      <li className={ activePage === 'user' ? "active" : '' }><a onClick={ () => onSelect('user') }>Users ({`${users.length}`})</a></li>

      <li className={ activePage === 'product' ? "active" : '' }><a onClick={ ()=> onSelect('product')}>Products ({`${ products.length }`})</a></li>
    </ul>

    { activePage === 'user' ? <UserList users = { users }/> : <ProductList products = { products } />}

  </div>
)

export default Nav;
