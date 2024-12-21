import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    genre: { type: String, required: true },
    ert: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: String, default: Date.now }
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema);

export default Post;
