import Education from "./Components/Education";
import Header from "./Components/Header";
import WorkingExp from "./Components/WorkingExp";

const App = () => {
  return (
    <div className="bg-[#012A4A] max-w-6xl mx-auto min-h-screen">
      <div className="p-10">
        <Header />
        <div className="flex gap-x-16">
          <WorkingExp />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
