import React, { useState } from "react";
import { axiosInstance } from "../api/api";

const BlogForm = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/blogs", {
        email,
        title,
        content,
      });

      if (response && response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Blog submitted successfully, but no message returned.");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("There was an error submitting the blog. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit Blog
      </button>
    </form>
  );
};

export default BlogForm;
