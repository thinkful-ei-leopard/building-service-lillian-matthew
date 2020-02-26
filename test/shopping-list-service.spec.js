'use strict';

require('dotenv').config();
const { expect } = require('chai');
const ShoppingService = require('../src/shopping-list-service');
const knex = require('knex');

describe('Shopping list service object', () => {
  let db;
  
  let testItems = [
    {
      id: 1,
      name: 'item 1',
      price: '4.02',
      date_added: new Date('2019-01-01'),
      checked: false,
      category:'Main'
    },
    {
      id: 2,
      name: 'item 2',
      price: '4.02',
      date_added: new Date('2019-01-01'),
      checked: false,
      category:'Snack'
    },
    {
      id: 3,
      name: 'item 3',
      price: '4.02',
      date_added: new Date('2019-01-01'),
      checked: true,
      category:'Lunch'
    }
  ];

  before('set up db', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  before('clean up db', () => db('shopping_list').truncate());
  afterEach('clean up db', () => db('shopping_list').truncate());

  after('destroys db connection', () => db.destroy());

  describe('getAllItems()', () => {
    
    // eslint-disable-next-line quotes
    it('returns empty', () => {
      return ShoppingService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([]);
        });
    });

    context('with data', () => {
      beforeEach('insert test items', () => {
        return db('shopping_list')
          .insert(testItems);
      });

      it('return all test items', () => {
        return ShoppingService.getAllItems(db)
          .then(items => expect(items).to.eql(testItems));
      });
    });

  });

  describe('getById()', () => {

    it('returns empty', () => {
      return ShoppingService.getById(db, 12345)
        .then(actual => {
          expect(actual).to.be.undefined;
        });
    });

    context('with data', () => {
      before('insert test item', () => {
        return db('shopping_list')
          .insert(testItems);
      });

      it('return existing item', () => {
        const expectedItemId = 2;
        const expectedItem = testItems[expectedItemId - 1];
        return ShoppingService.getById(db, expectedItemId)
          .then(actual => {
            expect(actual).to.eql({
              id: expectedItemId,
              name: expectedItem.name,
              price: expectedItem.price,
              date_added: expectedItem.date_added,
              checked: expectedItem.checked,
              category: expectedItem.category
            });
          });
      });
    });
  });

  describe('insertItem()', () => {
    const testItem = {
      id: 4,
      name: 'test title',
      price: '5.00',
      date_added: new Date('2019-01-01'),
      checked: true,
      category:'Lunch'
    };

    it('throws not-null constraint error if any key is not provided', () => {
      const newItem = { ...testItem };
      delete newItem.name;
      delete newItem.checked;
      
      return ShoppingService.insertItem(db, newItem)
        .then(
          () => expect.fail('db should throw an error'),
          (error) => expect(error.message).to.include('not-null')
        );
    });

    it('inserts record and returns new item', () => {
      const newItem = { ...testItem };
      
      return ShoppingService.insertItem(db, newItem)
        .then(actual => {
          expect(actual).to.eql({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            date_added: newItem.date_added,
            checked: newItem.checked,
            category: newItem.category
          });
        });
    });

  });

  describe('deleteItem()', () => {
    it('returns 0 rows affected', () => {
      return ShoppingService
        .deleteItem(db, 1345)
        .then(rowsAffected => expect(rowsAffected).to.eql(0));
    });

    context('with data', () => {
      before('insert items', () =>{
        return db('shopping_list')
          .insert(testItems)
      });

      it('returns 1 row affected and removed from db', () => {
        return ShoppingService
          .deleteItem(db, 1)
          .then(rowsAffected => {
            expect(rowsAffected).to.eql(1)
            return db('shopping_list').select('*');
          })
          .then(actual => {
            const expected = testItems.filter(item => item.id !== 1);
            expect(actual).to.eql(expected);
          });
      });
    });
  });

  describe('updateItem()', () => {
    it('returns 0 rows affected', () => {
      return ShoppingService
        .updateItem(db, 12345, {name: 'test'} )
        .then(rowsAffected => expect(rowsAffected).to.eql(0));
    });

    context('with data', () => {
      before('insert items', () => {
        return db('shopping_list')
          .insert(testItems)
      });

      it('updates item and returns 1 row affected', () => {
        return ShoppingService
          .updateItem(db, 1, {checked: true})
          .then(rowsAffected => {
            expect(rowsAffected).to.eql(1)
            return db('shopping_list').select('*').where({ id: 1 }).first();
          })
          .then(actual => {
            const testItem = testItems[0];
            const expectedItem = { ...testItem, checked: true }
            expect(actual).to.eql(expectedItem);
          })
      });
    });
  });
});