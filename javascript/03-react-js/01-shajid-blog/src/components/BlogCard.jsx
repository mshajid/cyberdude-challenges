import { Link } from "react-router-dom";
import BlogData from "../data/Posts";
import Shajid from "../assets/Shajid.png"

const BlogCard = () => {
  const postTemplate = BlogData.map((post) => {
    return (
      <div key={post.postID} className="max-w-4xl bg-white p-5 rounded-lg my-4 lg:mx-2">
        <h1 className="sm:text-3xl text-2xl sm:text-left text-center font-bold">
          <Link to={`coding-journey/${post.postLink}`}>{post.postTitle}</Link>
        </h1>
        <div className="sm:flex gap-x-3 sm:items-center my-2 flex justify-center">
          <div className="sm:flex-1 flex sm:flex gap-x-2 items-center sm:items-center">
            <img src={Shajid} className="sm:size-8 size-6" />
            <span className="sm:text-sm text-xs font-medium">{post.author}</span>
            <span className="hidden sm:block sm:text-sm sm:text-[10px] sm:font-bold sm:bg-[#FFD369] sm:px-3 sm:text-black sm:rounded-md">
              {post.readTime}
            </span>
          </div>
          <div className="sm:flex-row sm:flex-nowrap flex flex-wrap sm:gap-x-2 items-center">
            <span className="sm:text-sm text-xs font-regular">Published:</span>
            <span className="sm:text-sm text-xs font-bold">{post.datePublished}</span>
          </div>
        </div>
        <img src={post.featuredImg} className="rounded my-4 w-full" />
        <p className="my-4 text-pretty">{post.postDesc}</p>
        <button className="my-3 flex items-center justify-center w-full sm:justify-start">
          <Link
            className="bg-[#FFD369] text-black hover:bg-[#222831] hover:text-white px-5 py-1.5 rounded-md transition-all"
            to={`/coding-journey/${post.postLink}`}
          >
            Read more here
          </Link>
        </button>
      </div>
    );
  });

  return <div>{postTemplate}</div>;
};

export default BlogCard;
