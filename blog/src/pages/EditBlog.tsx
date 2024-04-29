import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import querystring from "querystring";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();

  const [headline, setHeadline] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/blogs/" + id
        );
        const blogData = response.data;
        setHeadline(blogData.headline);
        setIntroduction(blogData.introduction);
        setBody(blogData.body);
        setConclusion(blogData.conclusion);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData(); // Call the function to fetch blog data
  }, [id]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data to be submitted
    const updatedBlog = {
      headline,
      introduction,
      body,
      conclusion,
    };

    const updateBlog = async () => {
      try {
        await axios.put(
          `http://localhost:8000/api/blogs/${id}?${querystring.stringify(
            updatedBlog
          )}`
        );
      } catch (error) {
        console.log("Error while updating the blog post:", error);
      }
    };

    updateBlog();

    // Reset form fields after submission
    setHeadline("");
    setIntroduction("");
    setBody("");
    setConclusion("");

    window.location = "http://localhost:5173";
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="headline" className="block font-medium mb-2">
              Headline:
            </label>
            <input
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="introduction" className="block font-medium mb-2">
              Introduction:
            </label>
            <textarea
              id="introduction"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>
          <div>
            <label htmlFor="body" className="block font-medium mb-2">
              Body:
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              rows={8}
            />
          </div>
          <div>
            <label htmlFor="conclusion" className="block font-medium mb-2">
              Conclusion:
            </label>
            <textarea
              id="conclusion"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Update Blog
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditBlog;
