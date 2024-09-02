import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  blogs: [
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
