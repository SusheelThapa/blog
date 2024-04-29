import { useState } from "react";
import blogsjson from "../../assets/json/blog.json"; // Assuming the JSON file is exporting an array directly
import BlogType from "../../types/blog";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs] = useState<BlogType[]>(blogsjson);

  return (
    <div>
      {blogs.map((blog: BlogType) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
