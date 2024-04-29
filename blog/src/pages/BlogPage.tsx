import { useParams } from "react-router-dom";
import BlogType from "../types/blog";
import Layout from "../layout/Layout";
import Button from "../components/Common/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
  // Get the id parameter from the URL
  const { id } = useParams<{ id: string }>();

  const [blog, setBlog] = useState<BlogType>({
    headline: "",
    body: "",
    date: "",
    id: 0,
    introduction: "",
    conclusion: "",
    author_id: 0,
  });

  useEffect(() => {
    const fetchBlog = async (id: string) => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/blogs/" + id
        );
        setBlog(response.data);
      } catch (error) {
        console.log("Error occurred while fetching blog article");
      }
    };
    fetchBlog(id);
  }, [id]);
  console.log(id);

  console.log(blog);
  const { headline, body, date, introduction, conclusion, author_id } = blog;

  const blogDate = new Date(date);

  const formattedDate = blogDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Layout>
      <div>
        {id && (
          <>
            <div className="bg-stone-200 rounded-2xl p-8 flex gap-6 flex-col">
              <div className="text-gray-600 flex justify-between ">
                <div>{author_id}</div>
                <div>{formattedDate}</div>
              </div>
              <div className="text-left font-medium text-4xl mt-4">
                {headline}
              </div>
              <div className="flex flex-col gap-5 text-lg  font-montserrat my-3">
                <div>{introduction}</div>
                <div>{body}</div>
                <div>{conclusion}</div>
              </div>
            </div>
            <div className="flex w-full gap-4 justify-center my-4">
              <Button
                text="Edit Blog"
                className="bg-yellow-500 hover:bg-yellow-400 text-white "
                href={`/editblog/${id}`}
              />
              <Button
                text="Delete Blog"
                className="bg-red-700 hover:bg-red-600 text-white "
                onclick={() => {
                  // API Call to delete blog
                }}
              />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
