import { Link, useParams } from "react-router-dom";
import BlogData from "../data/Posts";



const BlogCard = () => {
  const params = useParams()
  console.log(params);

  const postTemplate = BlogData.map((post) => {
    return (
      <div className="max-w-4xl bg-white p-5 rounded-lg my-4">
        <h1 className="text-3xl font-semibold">{post.postTitle}</h1>
        <img src={post.featuredImg}/>
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
