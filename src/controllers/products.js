const Product = require('../models/products');
const Products = require('../collections/products');

const dateNow = new Date();

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
    console.log(req.body)
     await Product.forge()
    .save(
        {
            name : req.body.name,
            active : req.body.active,
            site : req.body.site,
            catalog : req.body.catalog,
            price: req.body.price,
            stock: req.body.stock,
            created_at : dateNow,
            updated_at : dateNow
        }
    )
    .then(function(product){
        res.json({
            error : false,
            data : { message: 'Salvo com sucesso' }
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
            name : req.body.name || product.get('name'),
            active : req.body.active || product.get('active'),
            site : req.body.site || product.get('site'),
            catalog : req.body.catalog || product.get('catalog'),
            price: req.body.price || product.get('price'),
            stock: req.body.stock || product.get('stock'),
            updated_at : dateNow
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
