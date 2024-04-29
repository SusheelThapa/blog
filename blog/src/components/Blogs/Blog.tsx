import BlogType from "../../types/blog";

interface Props {
  blog: BlogType;
}

const Blog = ({ blog }: Props) => {
  const blogDate = new Date(blog.date);

  const formattedDate = blogDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a href={`/blog/${blog.id}`}>
      <div className="text-lg my-10 bg-gray-300 p-8 rounded-2xl hover:bg-stone-300 flex gap-2 flex-col">
        <div className="text-gray-600 flex justify-between">
          <div>{blog.author_id}</div>
          <div>{formattedDate}</div> {/* Display the formatted date */}
        </div>
        <div className="font-semibold text-2xl">{blog.headline}</div>
        <div>{blog.introduction}</div>
      </div>
    </a>
  );
};

export default Blog;
