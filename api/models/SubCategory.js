/**
* SubCategory.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'sub-categories',

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
    category: {
      type: 'integer',
      model: 'Category',
      columnName: 'category_id',
      required: true
    }
  }
};

