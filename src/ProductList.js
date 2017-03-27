import React from 'react';
import ProductForm from './ProductForm.js';

const ProductList = ({ products, onDelete, onProductSave }) => (
  <div>
  <h3>Products</h3>
  <ProductForm products={ products } onDelete={ onDelete } onProductSave={ onProductSave }/>
  </div>
)

export default ProductList;
