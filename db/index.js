const conn = require('./conn');
const User = require('./User');
const Product = require('./Product');

const sync = ()=> conn.sync({ force: true });

const users = ['moe', 'curly', 'larry'];
const products = ['foo', 'bar'];

const seed = ()=> {
  return sync()
  .then( ()=> Promise.all( users.map( name => User.create({ name })) ))
  .then( ()=> Promise.all( products.map( name => Product.create({ name })) ))
};


module.exports = {
  seed,
  models: {
    User,
    Product
  }

}
