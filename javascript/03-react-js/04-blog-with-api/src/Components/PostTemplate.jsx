import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostTemplate = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const getPosts = await fetch("https://dummyjson.com/posts");
      const postJSON = await getPosts.json();
      setPost(postJSON.posts);
    };
    fetchPosts();
  }, []);

  const blogTemplate = post.map((eachPost) => {
    return (
      <div key={eachPost.id} className="max-w-xs">
        <div className="flex flex-col gap-y-2 overflow-hidden">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          />
          <h2 className="text-xl font-semibold mb-2 h-12">{eachPost.title}</h2>
          <p className="max-w-xs text-pretty h-12 overflow-y-clip">
            {eachPost.body}
          </p>
          <div className="flex gap-x-2 items-end">
            <div className="text-white flex gap-x-2 items-center">
              <span className="text-black font-semibold">Related Tags</span>
              {eachPost.tags.map((tag, index) => {
                return (
                  <span
                    key={`tag-${index}`}
                    className="px-2 bg-[#735751] rounded-md"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <Link
            className="bg-[#735751] py-0.5 text-center my-5 rounded-md text-sm text-white"
            to={`/blog/${eachPost.id}`}
          >
            Read Here
          </Link>
        </div>
      </div>
    );
  });

  return <div className="flex flex-wrap gap-10">{blogTemplate}</div>;
};

export default PostTemplate;
