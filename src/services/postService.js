const Post = require("../models/postModel.js")

const createPost = async (postData) => {
  const newPost = new Post(postData);
  return await newPost.save();
};

const getAllPosts = async () => {
  return await Post.find();
}

const getPostById = async (id) => {
  return await Post.findById(id);
}

const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true });
}

const deletePost = async () => {
  return await Post.findByIdAndDelete(id);
}

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };
