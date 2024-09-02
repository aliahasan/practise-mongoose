import express from "express";
import { getBlogs, postBlog } from "../controllers/BlogsControllers.js";
const router = express.Router();

router.post("/blogs", postBlog);
router.get("/blogs", getBlogs);

export default router;
