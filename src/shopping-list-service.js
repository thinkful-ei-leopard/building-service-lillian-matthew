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
  deleteItem(knex, id){
    return knex('shopping_list')
      .where({ id })
      .delete();
  },
  updateItem(knex, id, newItemFields){
    return knex('shopping_list')
      .where({ id })
      .update(newItemFields);
  }
};

module.exports = ShoppingService;