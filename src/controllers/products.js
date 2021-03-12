const Product = require('../models/products');
const Products = require('../collections/products');

exports.get = async function (req, res, next) {
     await Products.forge()
     .fetch()
     .then(function(collection){
         res.json({
             error : false,
             data : collection.toJSON()
         })
     })
     .catch(function(err){
         res.status(500)
         .json({
             error : true,
             data : { message : err.message }
         })
     })
}

exports.show = async function (req, res, next) {
     await Product.forge({
        id : req.params.id
    })
    .fetch()
    .then(function(product){
        if(!product){
            res.status(404)
            .json({
                error : true,
                data : {}
            })
        }else{
            res.json({
                error : false,
                data : product.toJSON()
            })
        }
    })
    .catch(function(err){
        res.status(500)
        .json({
            error : false,
            data : { message : err.message }
        })
    })
}

exports.store = async function (req, res, next) {
     await Product.forge()
    .save(
        {
            id : req.body.id,
            name : req.body.name
        }
    )
    .then(function(product){
        res.json({
            error : false,
            data : { id : product.get('id') }
        })
    })
    .catch(function(err){
        res.status(500)
        .json({
            error : true,
            data : {message : err.message}
        })
    })
}

exports.update = async function (req, res, next) {
     await Product.forge({
        id : req.params.id
    })
    .fetch({
        require : true
    })
    .then(function(product){
        product.save({
            id : req.query.id || product.get('id'),
            name : req.query.name || product.get('name')
        })
        .then(function(){
            res.json({
                error : false,
                data : {message : "product update"}
            })
        })
        .catch(function(err){
            res.json({
                error : true,
                data : {message : err.message}
            })
        })
    })
    .catch(function(err){
        res.status(500)
        .json({
            error : true,
            data : {message : err.message}
        })
    })
}

exports.delete = async function (req, res, next) {
     await Product.forge({ id : req.params.id })
     .fetch({ require : true })
     .then(function(product){
         product.destroy()
         .then(function(){
             res.json({
                 error : false,
                 data : { message : 'product deleted'}
             })
         })
         .catch(function(err){
             res.status(500)
             .json({
                 error : true,
                 data : { message : err.message}
             })
         })
     })
     .catch(function(err){
         res.status(500)
         .json({
             error : true,
             data : { message : err.message }
         })
     })
}
