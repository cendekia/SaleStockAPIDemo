/**
* ProductCategory.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'product_categories',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    productId: {
      type: 'integer',
      required: true,
      columnName: 'product_id',
      model: 'Product',
    },
    categoryId: {
      type: 'integer',
      required: true,
      columnName: 'category_id',
      model: 'Category',
    }
  }
};

