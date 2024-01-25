import BlogCard from "../components/BlogCard";
import TrendingPosts from "../components/Trending";

const Sidebar = () => {
  return (
    <div>
      <div className="max-w-sm p-4">
        <div className="bg-[#FFD369] p-5 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div>M. Shajid Shafee</div>
            <div>Full Stack Engineer</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              nisi, perspiciatis libero est sunt voluptates sapiente sed aliquam
              officiis commodi deleniti iusto natus reiciendis accusamus quod
              laboriosam hic asperiores possimus.
            </p>
            <div className="bg-black rounded-md px-5 py-1.5 my-3 text-white text-center">
              Links Are Here
            </div>
          </div>
        </div>
        <div className="my-5">
            <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
