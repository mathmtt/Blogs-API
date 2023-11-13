'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  },
};