import { useState } from "react";
import Layout from "../layout/Layout";
import getRandomNumber from "../utils/randomNumber";
import axios from "axios";
import querystring from "querystring";

const AddBlog = () => {
  const [headline, setHeadline] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const author_id = getRandomNumber(1, 6);
    const newBlog = {
      headline,
      introduction,
      body,
      author_id,
      conclusion,
    };

    const queryNewBlog = querystring.stringify(newBlog);

    console.log(queryNewBlog);

    // Perform API call or other actions with the new blog data
    const addBlog = async () => {
      try {
        await axios.post(`http://localhost:8000/api/blogs?${queryNewBlog}`);
      } catch (error) {
        console.log("Error occurred while adding blogs:", error);
      }
    };

    addBlog();

    // Reset the form fields
    setHeadline("");
    setIntroduction("");
    setBody("");
    setConclusion("");

    window.location = "http://localhost:5173";
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Add Blog</h1>
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
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
