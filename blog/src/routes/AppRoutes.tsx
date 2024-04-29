import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogType from "../types/blog";
import blogsjson from "../assets/json/blog.json"; // Assuming the JSON file is exporting an array directly
import { useState } from "react";
import AddBlog from "../pages/AddBlog";
import EditBlog from "../pages/EditBlog";

const AppRoutes = () => {
  const [blogs] = useState<BlogType[]>(blogsjson);

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
