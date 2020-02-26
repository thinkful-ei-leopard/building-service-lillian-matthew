'use strict';

const ShoppingService = {
  getAllItems(knex){
    return knex.select('*').from('shopping_list');
  },
  getById(knex,id){
    return knex.from('shopping_list').select('*').where('id', id).first();
  },
  insertItem(knex, newItem){
    return knex
      .ins
  },
  deleteItem(knex, id){},
  updateItem(knex, id, newItemFields){}
};

module.exports = ShoppingService;