'use strict'

const bookshelf = require('../../config/bookshelf');

const Booklist = bookshelf.Model.extend({
    tableName: 'booklist',
    fillable: ['name', 'volume_id'],
    guarded: ['id'],
    hasTimestamps: true
})
module.exports = bookshelf.model('Booklist', Booklist);