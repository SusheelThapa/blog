import Blogs from "../components/Blogs/Blogs";
import Button from "../components/Common/Button";
import Layout from "../layout/Layout";
import BlogType from "../types/blog";

interface Props {
  blogs: BlogType[];
}

const HomePage = ({ blogs }: Props) => {
  return (
    <Layout>
      <div>
        <div className="text-7xl font-medium text-stone-950 font-montserrat">
          Blog
        </div>
        <div className="text-lg text-gray-700 mt-4">
          Unlocking insights, one byte at a time
        </div>
      </div>
      <Button
        text="Add Blog"
        className="bg-blue-600 text-white  hover:bg-blue-700 font-bold tracking-wider "
        href="/addblog"
      />
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export default HomePage;
