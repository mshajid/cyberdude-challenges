import BlogCard from "../components/BlogCard";
import TrendingPosts from "../components/Trending";
import Shajid from "../assets/Shajid.png";
import MdiGithub from "../assets/MdiGithub";

const Sidebar = () => {
  return (
    <div>
      <div className="max-w-sm p-4">
        <div className="bg-[#FFD369] p-5 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <img src={Shajid} className="size-32" />
            <div className="my-2">
              <div className="text-xl font-bold leading-2">
                M. Shajid Shafee
              </div>
              <div className="text-sm font-light text-center">
                Full Stack Engineer
              </div>
            </div>
            <p className="text-center text-sm">
              Shajid is a Full Stack Engineer who loves to build web apps, and
              loved to learn consistently. Not only he work as a Full Stack
              Engineer but also he specialized in{" "}
              <span className="font-semibold mx-0.5">SEO,</span>
              <span className="font-semibold mx-0.5">Data Analytics,</span>
              <span className="font-semibold mx-0.5">Content Strategist</span>.
            </p>
            <div className="bg-black rounded-md px-5 py-1.5 my-3 text-white text-center flex gap-x-2">
              <div>
                <svg
                  className="hover:text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    fill="#888888"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  className="hover:text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#888888"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    className="stroke-current"
                    d="M19 15v6H5v-6m11 2H8m7.913-2.337L8.087 13m8.626-.62L9.463 9m8.71 1.642L12.044 5.5m7.99 3.304L15.109 2.5"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  className="hover:text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current"
                    fill="#888888"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
