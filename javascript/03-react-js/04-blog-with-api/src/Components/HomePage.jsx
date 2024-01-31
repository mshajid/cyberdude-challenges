import PostTemplate from "./PostTemplate";

const HomePage = () => {
  return (
    <div className="px-10 mt-2 mb-10">
      <div className="font-bold text-2xl py-7">Trending Posts</div>
      <PostTemplate />
    </div>
  );
};

export default HomePage;
