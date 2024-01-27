import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const CodingJourney = () => {
  return (
    <div>
      <div className="max-w-4xl bg-white p-5 rounded-lg my-4">
        <h2 className="font-semibold text-2xl mb-2">My Coding Journey</h2>
        <p>In this section, you'll see all related posts to My Coding Journey, Where I share my thoughts, and my works here. Feel free to dig deep and share your thoughts. Much appreciated.</p>
        <div className="my-5">
          <ul className="list-disc px-8 flex flex-col gap-y-4">
            <li><Link className="hover:text-blue-500" to={"/coding-journey/how-to-be-a-dev"}>How To Become A Developer In 6 Months</Link></li>
            <li><Link className="hover:text-blue-500" to={"/coding-journey/learning-how-to-learn"}>Learning How To Learn Effectively In 2024</Link></li>
            <li><Link className="hover:text-blue-500" to={"/coding-journey/developer-mistakes-you-should-avoid"}>Top 10 Most Common Mistakes Web Developer Makes</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodingJourney;
