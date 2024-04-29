import Blogs from "../components/Blogs/Blogs";
import Layout from "../layout/Layout";
import BlogType from "../types/blog";

interface Props {
  blogs: BlogType[];
}

const HomePage = ({ blogs }: Props) => {
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

      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default HomePage;
