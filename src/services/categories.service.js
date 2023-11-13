const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategory = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category;
};

const insertCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  getAllCategories,
  getCategory,
  insertCategory,
};