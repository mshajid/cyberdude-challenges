import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const findPosts = async () => {
      const getPosts = await fetch("https://dummyjson.com/posts");
      const convertJson = await getPosts.json();
      setPost(convertJson.posts);
    };
    findPosts();
  }, []);

  const findIdPost = post.filter((post) => {
    return post.id == id;
  });
  return (
    <div>
      <div>
        {findIdPost.map((value) => {
          <div key={value.id}>console.log(value.title)</div>
        })}
      </div>
    </div>
  );
};

export default Blog;
