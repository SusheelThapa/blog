import Blogs from "../components/Blogs/Blogs";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <div className="text-9xl font-medium text-stone-950 font-montserrat">
          Blog
        </div>
        <div className="text-2xl text-gray-700 mt-4">
          Unlocking insights, one byte at a time
        </div>
      </div>

      <Blogs />
    </Layout>
  );
};

export default HomePage;
