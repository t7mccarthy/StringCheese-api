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
  db.createTable('address', {
    address_id: {
      type: 'int', 
      primaryKey: true 
    }, 
    addressline: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    state: {
      type: 'string',
      length: 40
    },
    zipcode: {
      type: 'int'
    }
  }, callback);
  
};

exports.down = function(db) {
  db.dropTable('address')
};


exports._meta = {
  "version": 1
};