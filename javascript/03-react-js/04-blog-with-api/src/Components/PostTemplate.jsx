import { useEffect, useState } from "react";

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
        <div className="flex flex-col gap-y-2">
          <img className="rounded-md" src="https://placekitten.com/200/200" />
          <h2 className="text-2xl font-semibold mb-2">{eachPost.title}</h2>
          <p className="max-w-xs text-pretty">{eachPost.body}</p>
          <div className="flex gap-x-2 items-end h-12">
            <div className="text-white flex gap-x-2 items-center">
              <span className="text-black">Related Tags</span>
              {eachPost.tags.map((tag) => {
                return (
                  <span className="px-2 bg-[#735751] rounded-md">{tag}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-wrap gap-10">{blogTemplate}</div>;
};

export default PostTemplate;
