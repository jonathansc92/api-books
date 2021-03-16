const Booklist = require('../models/booklist');
const Booklists = require('../collections/booklist');

const dateNow = new Date();

exports.getAll = function (req, res, next) {
    Booklists.forge()
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

exports.addToFavorite = function (req, res, next) {
    Booklist.forge()
    .save(
        {
            name : req.body.name,
            volume_id : req.body.volume_id,
            created_at : dateNow,
            updated_at : dateNow
        }
    )
    .then(function(booklist){
        res.json({
            error : false,
            data : { message: 'Adicionado a sua lista de favoritos' }
        })
    })
    .catch(function(err){
        if (err.code === "ER_DUP_ENTRY"){
            res.status(500)
            .json({
                error : true,
                data : { message : "O volume já está em seus favoritos" }
            })
        }
        else {
            res.status(500)
            .json({
                error : true,
                data : { message : err.message }
            })
        }
    })
}

exports.removeFavorite = function (req, res, next) {
    Booklist.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(booklist){
        booklist.destroy()
        .then(function(){
            res.json({
                error : false,
                data : { message : 'Livro removido da lista de favoritos'}
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