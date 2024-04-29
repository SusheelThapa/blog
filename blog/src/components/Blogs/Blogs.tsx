import BlogType from "../../types/blog";
import Blog from "./Blog";

interface Props {
  blogs: BlogType[];
}
const Blogs = ({ blogs }: Props) => {
  console.log(blogs);

  return (
    <div>
      {blogs.map((blog: BlogType) => {
        return <Blog blog={blog} key={blog.id} />;
      })}
    </div>
  );
};

export default Blogs;
``;
