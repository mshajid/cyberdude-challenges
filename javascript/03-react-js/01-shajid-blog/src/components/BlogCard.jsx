import { Link } from "react-router-dom";
import BlogData from "../data/Posts";
import Shajid from "../assets/Shajid.png"

const BlogCard = () => {
  const postTemplate = BlogData.map((post) => {
    return (
      <div key={post.postID} className="max-w-4xl bg-white p-5 rounded-lg my-4">
        <h1 className="text-3xl font-bold">
          <Link to={`coding-journey/${post.postLink}`}>{post.postTitle}</Link>
        </h1>
        <div className="flex gap-x-3 items-center my-2">
          <div className="flex-1 flex gap-x-3 items-center">
            <img src={Shajid} className="size-6" />
            <span className="text-sm font-medium">{post.author}</span>
            <span className="text-sm font-bold bg-[#FFD369] px-3 text-black rounded-md">
              {post.readTime}
            </span>
          </div>
          <div className="flex gap-x-2">
            <span className="text-sm font-regular">Published:</span>
            <span className="text-sm font-bold">{post.datePublished}</span>
          </div>
        </div>
        <img src={post.featuredImg} className="rounded my-4 w-full" />
        <p className="my-4">{post.postDesc}</p>
        <button className="my-3">
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
