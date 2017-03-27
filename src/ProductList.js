import React from 'react';
import ProductForm from './ProductForm.js';
import ProductListItem from './ProductListItem.js';

const ProductList = ({ products, onDelete, onProductSave }) => (
  <div>
    <h3>Products</h3>
    <ProductForm products={ products } onDelete={ onDelete } onProductSave={ onProductSave }/>
    <ProductListItem products={ products } onDelete={ onDelete }/>
  </div>
)

export default ProductList;
