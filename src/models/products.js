const Bookshelf = require('../../config/bookshelf');

const Product = Bookshelf.Model.extend({
    tableName: 'products',
    fillable: ['name', 'active', 'site', 'catalog'],
    guarded: ['id'],
    hasTimestamps: true
    // favorites: function() {
    //     return this.hasMany('Favorite');
    // },
    // profile: function() {
    //     return this.hasOne('Subscriber');
    // }
})
module.exports = Bookshelf.model('Product', Product);