const db = require('../db');
const { UserColl } = require('../models');

const main = async () => {
    const testUser = [{
        username: 'narrwe',
        password: '12345',
        books: []
    },
    {
        username: 'ben',
        password: '67890',
        books: ['a','b','c','d','e']
    }];
    await UserColl.insertMany(testUser);
    console.log(`testUser inserted into UserColl`);
};

const run = async () => {
    await main();
    db.close();
};

run();