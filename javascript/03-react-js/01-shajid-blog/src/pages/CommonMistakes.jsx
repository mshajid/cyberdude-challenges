import Mistakes from "../assets/mistakes-developer.png";

const CommonMistakes = () => {
  return (
    <div className="max-w-4xl bg-white p-5 rounded-lg my-6">
      <div className="mb-10">
        <img src={Mistakes} className="rounded-md mb-2" />
        <span className="text-xs">Published by: Muhammed Shajid Shafee</span>
      </div>
      <h2 className="text-3xl font-semibold mb-4">
        10 Most Common Mistakes Web Developer Make
      </h2>
      <div className="flex flex-col gap-y-10 mb-3">
        <div>
          <p className="text-pretty">
            From neglecting crucial aspects like cross-browser compatibility and
            mobile optimization to overlooking security and SEO best practices,
            there are several pitfalls to avoid. Proper planning, testing, and
            adherence to standards like accessibility and version control can
            help developers create more robust and user-friendly websites while
            minimizing errors and maximizing efficiency.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            1. Ignoring Cross-Browser Compatibility
          </h2>
          <p>
            Failing to test and ensure that a website functions properly across
            different web browsers can lead to a poor user experience for a
            significant portion of your audience.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            2. Not Optimizing for Smartphones
          </h2>
          <p>
            With the increasing use of mobile devices, neglecting to make your
            website responsive or mobile-friendly can alienate a large portion
            of potential visitors.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            3. Overlooking Perfomance Optimization
          </h2>
          <p>
            Slow-loading websites can frustrate users and negatively impact
            search engine rankings. Optimizing code, images, and server response
            times is crucial for a smooth user experience.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            4. Neglecting Web Security
          </h2>
          <p>
            Failing to implement proper security measures leaves websites
            vulnerable to attacks such as SQL injection, cross-site scripting
            (XSS), and more. It's essential to stay updated on security best
            practices and regularly patch vulnerabilities.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            5. Not Implementing Version Control
          </h2>
          <p>
            Working without version control systems like Git can lead to
            confusion, lost code, and difficulties collaborating with other
            developers. Version control helps track changes and enables seamless
            collaboration.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            6. Ignoring SEO Best Practices
          </h2>
          <p>
            Neglecting search engine optimization (SEO) can result in poor
            visibility on search engine results pages (SERPs). Developers should
            understand SEO basics like optimizing meta tags, using semantic
            HTML, and creating a crawlable site structure.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            7. Not Paying Attention To Accessibility
          </h2>
          <p>
            Building websites that are not accessible to users with disabilities
            can result in legal issues and exclude a significant portion of
            potential visitors. Following accessibility standards like WCAG
            ensures that everyone can access and use your site.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            8. Not Testing Properly
          </h2>
          <p>
            Skipping thorough testing, including functionality testing,
            usability testing, and compatibility testing, can result in
            undiscovered bugs and usability issues that harm the user
            experience.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            9. Overcomplicating Solutions
          </h2>
          <p>
            Sometimes developers can fall into the trap of overengineering
            solutions, adding unnecessary complexity that makes maintenance and
            future development more challenging. Keeping solutions simple and
            straightforward is often the best approach.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">
            10. Failing To Plan And Document
          </h2>
          <p>
            Rushing into coding without proper planning and documentation can
            lead to inconsistencies, misunderstandings, and difficulties
            maintaining the codebase over time. Taking the time to plan and
            document your work can save time and headaches in the long run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonMistakes;
