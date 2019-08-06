'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      title: 'Dawam',
      description: 'description',
      publised : 'publised',
      author : {
          first_name : 'first_name',
          last_name: 'last_name',
      },
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', [{
      title :'Dawam'
    }])
  }
};
