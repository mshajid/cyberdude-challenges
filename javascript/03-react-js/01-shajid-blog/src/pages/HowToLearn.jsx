import Learn from "../assets/how-to-learn.png";

const HowToLearn = () => {
  return (
    <div className="max-w-4xl bg-white p-5 rounded-lg my-6">
      <div className="mb-10">
        <img src={Learn} className="rounded-md mb-2" />
        <span className="text-xs">Published by: Muhammed Shajid Shafee</span>
      </div>
      <h2 className="text-3xl font-semibold mb-4">
        Learning How To Learn - Unlock The How To Learn With A Framework
      </h2>
      <div className="flex flex-col gap-y-5 mb-3">
        <div>
          <p className="text-pretty">
            Learning how to learn is like unlocking the ultimate skill in your
            cognitive toolkit. It's about understanding how your brain processes
            information, retaining knowledge effectively, and adapting your
            learning strategies to different subjects and situations. Here are
            some key principles to get you started
          </p>
        </div>

        <div className="flex flex-col gap-y-2 mb-3">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">What I Believe?</h2>
          <p>
            I believe that everybody can learn and everybody can pursue any
            highest degree at ease but still people fail, Why is it? It is
            because of their learning framework. As I said before everybody can
            read, memorize and learn. but It's temporary.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-xl font-semibold bg-[#222831] text-white w-fit px-3 py-0.5 rounded-md">Why It's Temporary? How to Overcome</h2>
          <p>
            Everyone possess at some degree of learning skill, Not everybody
            loves to write their notes in a notebook, some people are digital
            nomads. I like obsidian, it's a note taking software that allows you
            to write via markdown and it's simple as it is.
          </p>
        </div>

        <ul className="list-disc px-5 flex flex-col gap-y-2 my-2">
          <li className="list-item text-pretty">
            <span className="font-bold">Metacognition</span>: This is essentially thinking about your own thinking.
            Reflect on your learning process: What strategies are you using? Are
            they effective? How can you improve?
          </li>
          <li className="list-item">
            <span className="font-bold">Chunking</span>: Break down complex subjects into smaller, more manageable
            chunks. This makes it easier for your brain to process and retain
            information.
          </li>
          <li className="list-item">
            <span className="font-bold">Active learning</span>: Engage with the material actively rather than
            passively. This could involve summarizing, teaching others, or
            solving problems related to the topic.
          </li>
          <li className="list-item">
            <span className="font-bold">Practice retrieval</span>: Test yourself on the material you're learning
            instead of just re-reading or re-listening to it. Actively recalling
            information strengthens memory retention.
          </li>
          <li className="list-item">
            <span className="font-bold">Seek understanding</span>: Don't just memorize facts; strive to understand
            the underlying concepts and principles. This promotes deeper
            learning and better problem-solving skills.
          </li>
          <li className="list-item">
            <span className="font-bold">Adapt and iterate</span>: Not every learning strategy works the same for
            everyone or every subject. Be willing to experiment with different
            approaches and adjust your methods based on what works best for you.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowToLearn;
