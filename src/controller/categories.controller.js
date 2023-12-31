const serviceCategories = require('../services/categories.service');

const getAllCategories = async (_req, res) => {
  const categories = await serviceCategories.getAllCategories();
  return res.status(200).json(categories);
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await serviceCategories.getCategory(id);
  if (!category) {
    return res.status(404).json({ message: 'Category does not exist' });
  }
  return res.status(200).json(category);
};

const createCategory = async (_req, res) => {
  const { name } = _req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await serviceCategories.insertCategory(name);
  return res.status(201).json(category);
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
};