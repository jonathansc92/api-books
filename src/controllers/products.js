const Product = require('../models/products');
const Products = require('../collections/products');

module.exports = {
    getAll : function(req, res){ 
    Products.forge()
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
    },

    show : function(req, res){
            Product.forge({
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
        },
    
        store : function(req, res){
            console.log(req)
            Product.forge({
                name : req.body.name
            })
            .save()
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
        },
    
        update : function(req, res){
            Product.forge({
                id : req.params.id
            })
            .fetch({
                require : true
            })
            .then(function(product){
                product.save({
                    name : req.body.name || category.get('name')
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
        },
    
        delete : function(req, res){
            Product.forge({ id : req.params.id })
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
}