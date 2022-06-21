'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roosters', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      color: Sequelize.STRING,
      initials: Sequelize.STRING,
      feather: Sequelize.STRING,
      crest: Sequelize.STRING,
      fecha: Sequelize.STRING,
      estado: Sequelize.STRING,
      mother_id: Sequelize.INTEGER,
      mother_color: Sequelize.STRING,
      mother_initials: Sequelize.STRING,
      mother_mother_id: Sequelize.INTEGER,
      mother_mother_initials: Sequelize.STRING,
      mother_father_id: Sequelize.INTEGER,
      mother_father_initials: Sequelize.STRING,
      father_id: Sequelize.INTEGER,
      father_color: Sequelize.STRING,
      father_initials: Sequelize.STRING,
      father_mother_id: Sequelize.INTEGER,
      father_mother_initials: Sequelize.STRING,
      father_father_id: Sequelize.INTEGER,
      father_father_initials: Sequelize.STRING,
      notes: Sequelize.TEXT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roosters');
  }
};
