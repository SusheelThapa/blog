import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();

  // State variables to hold form data
  const [headline, setHeadline] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [body, setBody] = useState("");
  const [conclusion, setConclusion] = useState("");

  const blogData = {
    headline:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    body: "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    date: "2024-04-29T02:01:54.742082",
    id: 2,
    introduction:
      '"Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    conclusion:
      '"Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    author_id: 3,
  };

  // Effect to fetch existing blog data when the component mounts
  useEffect(() => {
    // Mock API call to fetch blog data based on the blogId
    const fetchBlogData = async () => {
      try {
        // Replace this with actual API call

        // Set form data with the fetched blog data
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

    // Perform API call or other actions to update the blog data
    console.log("Updated Blog Data:", updatedBlog);

    // Reset form fields after submission
    setHeadline("");
    setIntroduction("");
    setBody("");
    setConclusion("");
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
