import { Link, useParams } from "react-router-dom";
import BlogData from "../data/Posts";

const BlogCard = () => {
  const params = useParams();
  console.log(params);

  const postTemplate = BlogData.map((post) => {
    return (
      <div className="max-w-4xl bg-white p-5 rounded-lg my-4">
        <h1 className="text-3xl font-bold">{post.postTitle}</h1>
        <div className="flex gap-x-3 items-center my-2">
          <div className="flex-1 flex gap-x-3 items-center">
            <span className="text-sm font-medium">{post.author}</span>
            <span className="text-sm font-bold bg-[#FFD369] px-3 text-black rounded-md">{post.readTime}</span>
          </div>
          <div className="flex gap-x-2">
            <span className="text-sm font-regular">Published:</span>
            <span className="text-sm font-bold">{post.datePublished}</span>
          </div>
        </div>
        <img src={post.featuredImg} className="rounded my-4" />
        <p>{post.postDesc}</p>
        <button>
          <Link to={`/coding-journey/${post.postLink}`}>Click Here</Link>
        </button>
      </div>
    );
  });

  return <div>{postTemplate}</div>;
};

export default BlogCard;
