import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const findPosts = async () => {
      const getPosts = await fetch(`https://dummyjson.com/posts/${id}`);
      const convertJson = await getPosts.json();
      setPost(convertJson);
    };
    findPosts();
  }, [id]);

  return (
    <div className="flex justify-center items-center h-[600px]">
      <div className="w-[850px] gap-y-3 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold tracking-wide">{post.title}</h2>
        <p className="max-w-2xl">{post.body}</p>
        <Link className="bg-yellow-600 px-3 py-1.5" to={"/"}>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Blog;
