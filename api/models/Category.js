/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'categories',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    subcategory: {
      collection: 'subcategory',
      via: 'category'
    }
  }
};

