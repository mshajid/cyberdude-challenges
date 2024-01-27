import { Link } from "react-router-dom";
import SidebarPosts from "../data/TrendingPosts";

const TrendingPosts = () => {
  const trendingPostTemplate = SidebarPosts.map((post) => {
    return (
      <>
        <Link to={`coding-journey/${post.category}`}>
          <div className="bg-[#393E46] px-5 py-2 my-2 text-white rounded-lg hover:bg-gradient-to-r from-blue-800 to-indigo-900 transition-all">
            <div className="sm:flex-row flex items-center gap-x-3">
              <div>
                <img src={post.smallFeaturedImg} className="rounded-md lg:rounded-full" />
              </div>
              <div className="flex lg:flex-col justify-between w-full gap-y-5">
                <span className="text-pretty text-xs sm:text-sm font-semibold xl:text-sm sm:font-bold">
                  {post.postTitle}
                </span>
                <div className="sm:flex flex justify-center items-center sm:items-center gap-x-2">
                  <img src={post.authorImg} className="rounded-md sm:size-4 size-8" />
                  <span className="text-[10px]">By. {post.authorName}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return (
    <div>
      <div className="text-2xl font-semibold">Trending Posts</div>
      {trendingPostTemplate}
    </div>
  );
};

export default TrendingPosts;

{
  /* <Link to={`coding-journey/${post.category}`}></Link> */
}
