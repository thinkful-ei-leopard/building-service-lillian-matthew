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
      beforeEach('insert test articles', () => {
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
  });

  //describe('insertItem()', () => {});

  //describe('deleteItem()', () => {});

  //describe('updateItem()', () => {});
});