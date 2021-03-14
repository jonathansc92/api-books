'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
    name: { type: 'string', notNull: true },
    active: { type: 'boolean', defaultValue: 0, notNull: false },
    site: { type: 'boolean', defaultValue: 0, notNull: false },
    catalog: { type: 'boolean', defaultValue: 0, notNull: false },
    price: { type: 'float', defaultValue: 0.00, notNull: true},
    stock: { type: 'int', defaultValue: 0, notNull: false},
    created_at: { type: 'timestamp', notNull: true },
    updated_at: { type: 'timestamp', notNull: true }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('products', callback);
};

exports._meta = {
  "version": 1
};
