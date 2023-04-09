'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      full_name: 'John',
      email: 'Doe',
      user_id: '1',
      pass_word: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      full_name: 'John 2',
      email: 'Doe 2',
      user_id: '2',
      pass_word: 'example2@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  
  ]);
},

  async down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
};
