const router = require('express').Router();
const models = require('../db').models;

router.get('/products', (req,res,next)=>{
  models.Product.findAll({ order: '"name" ASC' })
  .then( products => res.send(products))
  .catch(next);
})

router.get('/users', (req,res,next)=>{
  models.User.findAll({ order: '"name" ASC' })
  .then( users => res.send(users))
  .catch(next);
})

router.delete('/products/:id',(req,res,next)=>{
  models.Product.destroy({ where: { id: req.params.id }})
  .then( () => res.sendStatus(200))
  .catch(next);
})

router.post('/products', (req,res,next)=>{
  models.Product.create(req.body)
  .then( () => res.end())
  .catch(next)
})

module.exports = router;
