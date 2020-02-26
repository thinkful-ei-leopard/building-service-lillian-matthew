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
      price: 4.20,
      date_added: new Date('2019-01-01'),
      checked: false,
      category:'Main'
    },
    {
      id: 2,
      name: 'item 2',
      price: 4.20,
      date_added: new Date('2019-01-01'),
      checked: false,
      category:'Snack'
    },
    {
      id: 3,
      name: 'item 3',
      price: 4.20,
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
    it(`returns empty`, () => {
      return ShoppingService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([]);
        });
    });



  });

});