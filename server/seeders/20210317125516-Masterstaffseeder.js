'use strict';
let fs = require ('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./data/user.json',"utf8"));
    for(let i = 0 ; i < data.length ; i ++){
      data[i].createdAt = new Date()
      data[i].updatedAt = new Date()
    } 
    return queryInterface.bulkInsert('Masterstaffs', data , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Masterstaffs', null, {});

  }
};
