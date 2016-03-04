/**
* AttributeDetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'attribute-details',

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
    attribute: {
      type: 'integer',
      model: 'Attribute',
      columnName: 'attribute_id',
      required: true
    }
  }
};

