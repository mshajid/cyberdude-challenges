import TrendingPosts from "../components/Trending";
import Shajid from "../assets/Shajid.png";

const Sidebar = () => {
  return (
    <div>
      <div className="sm:max-w-sm sm:p-4">
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
            <div className="bg-black rounded-md px-5 py-1.5 my-3 text-gray-300 text-center flex items-center gap-x-4">
              {/* GitHubIcon */}
              <a target="_blank" href="https://github.com/mshajid">
                <div title="Check my GitHub profile">
                  <svg
                    className="hover:text-white cursor-pointer hover:-translate-y-1 transition-all"
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
              </a>
              {/* Stackoverflow Icon */}
              <a
                target="_blank"
                href="https://stackoverflow.com/users/23201707/shajid-shafee"
              >
                <div title="Check my Stackoverflow profile">
                  <svg
                    className="hover:text-[#F47F24] hover:-translate-y-1 transition-all cursor-pointer"
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
              </a>
              {/* LinkedIn Icon */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shajidshafee/"
              >
                <div title="Check my LinkedIn profile">
                  <svg
                    className="hover:text-[#0A66C2] hover:-translate-y-1 transition-all cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      fill="#888888"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                  </svg>
                </div>
              </a>
              {/* PSN Icon */}
              <a target="_blank" href="https://www.playstation.com/en-gb/">
                <div title="Come let's hunt :D">
                  <svg
                    className="hover:text-[#006FCD] hover:-translate-y-1 transition-all cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      fill="#888888"
                      d="M9.5 4.27c1.38.26 3.4.87 4.5 1.23c2.75.95 3.69 2.13 3.69 4.79c0 2.6-1.6 3.58-3.64 2.6V8.05c0-.55-.1-1.08-.64-1.23c-.41-.13-.65.25-.65.81v12.1L9.5 18.69zm3.87 13.35l5.25-1.87c.6-.21.69-.51.21-.67c-.49-.16-1.36-.11-1.96.1l-3.5 1.23v-1.96l.21-.07s1.01-.38 2.42-.51c1.43-.16 3.17.02 4.53.53c1.54.49 1.72 1.21 1.33 1.7c-.4.5-1.36.85-1.36.85l-7.13 2.55zm-9.87-.2C1.93 17 1.66 16.05 2.38 15.5c.67-.5 1.8-.85 1.8-.85L8.86 13v1.88L5.5 16.09c-.6.21-.69.51-.21.67c.48.16 1.36.12 1.95-.1l1.62-.58v1.69l-.32.06c-1.62.26-3.34.17-5.04-.41"
                    ></path>
                  </svg>
                </div>
              </a>
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
