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
  db.createTable('booklist', {
    id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
    name: { type: 'string', notNull: true },
    volume_id: { type: 'string', notNull: true, unique: true, length: 20 },
    created_at: { type: 'timestamp', notNull: true },
    updated_at: { type: 'timestamp', notNull: true }
  }, callback);
};

exports.down = function(db) {
  db.dropTable('booklist', callback);
};

exports._meta = {
  "version": 1
};
