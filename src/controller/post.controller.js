const servicePost = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const posts = await servicePost.getAllPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await servicePost.getPostById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getPostById,
};