import Blog from "../models/Blogs.js";

export const postBlog = async (req, res) => {
  try {
    const { email, title, content } = req.body;
    // Find the user's blog document by email
    let blog = await Blog.findOne({ email });
    if (!blog) {
      // If no document exists for the user, create a new one
      blog = new Blog({
        email,
        blogs: [{ title, content }],
      });
    } else {
      // If the document exists, add the new blog entry to the blogs array
      blog.blogs.push({ title, content });
    }
    await blog.save();
    res.status(201).json({
      message: "Blog added successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
