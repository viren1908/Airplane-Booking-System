'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addConstraint('Airports',{
        type: 'foreign key',
        fields: ['cityId'],
        name: 'City_fk_contraint',
        references: {
          table: 'Cities',
          field: 'id'
        },
        onDelete: 'CASCADE'
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','City_fk_contraint');
  }
};
