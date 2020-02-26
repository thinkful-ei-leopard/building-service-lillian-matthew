'use strict';

const ShoppingService = {
  getAllItems(knex){
    return knex
      .select('*')
      .from('shopping_list');
  },
  getById(knex,id){
    return knex
      .select('*')
      .from('shopping_list')
      .where('id', id)
      .first();
  },
  insertItem(knex, newItem){
    return knex
      .insert(newItem)
      .into('shopping_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteItem(knex, id){},
  updateItem(knex, id, newItemFields){}
};

module.exports = ShoppingService;