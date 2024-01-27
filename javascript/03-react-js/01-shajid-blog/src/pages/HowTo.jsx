import WebDev from "../assets/web-dev.png";

const HowTo = () => {
  return (
    <div className="max-w-4xl bg-white p-5 rounded-lg my-6">
      <div className="sm:mb-10 mb-5">
        <img src={WebDev} className="rounded-md mb-2" />
        <span className="text-xs">Published by: Muhammed Shajid Shafee</span>
      </div>
      <h2 className="text-3xl font-semibold mb-4">
        How To Become A Web Developer In 6 Months
      </h2>
      <div className="flex flex-col gap-y-8">
        Becoming a web developer in six months is an ambitious goal, but it's
        definitely achievable with dedication and the right approach. Here's a
        roadmap to help you get started
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            1. Set Clear Goals
          </h3>
          <p>
            Define what type of web developer you want to become (front-end,
            back-end, full-stack) and what technologies you want to learn (HTML,
            CSS, JavaScript, Python, etc.).
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            2. Choose Your Path
          </h3>
          <p>
            Decide whether you want to focus on front-end development (working
            on the user-facing part of websites), back-end development (working
            on the server-side logic), or become a full-stack developer
            (proficient in both front-end and back-end).
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            3. Learn The Basics
          </h3>
          <p>
            Start with the fundamentals of web development. Learn HTML for
            structuring web pages, CSS for styling them, and JavaScript for
            adding interactivity.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            4. Select Learning Resources
          </h3>
          <p>
            There are numerous online platforms like freeCodeCamp, Codecademy,
            and Udemy where you can find courses on web development. Choose one
            that suits your learning style and stick to it.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            5. Network & Join Communities
          </h3>
          <p>
            Join web development communities, forums, and meetups both online
            and offline. Networking with other developers can provide valuable
            insights and opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            6. Seek Feedback
          </h3>
          <p>
            Don't be afraid to ask for feedback on your projects. Constructive
            criticism can help you identify areas for improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
