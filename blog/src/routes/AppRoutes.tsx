import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogType from "../types/blog";
import { useEffect, useState } from "react";
import AddBlog from "../pages/AddBlog";
import EditBlog from "../pages/EditBlog";
import axios from "axios";

const AppRoutes = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);

  const [blogs, setBlogs] = useState<BlogType[]>([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
