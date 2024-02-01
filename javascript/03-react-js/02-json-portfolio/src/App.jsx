import Education from "./Components/Education";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import WorkingExp from "./Components/WorkingExp";

import mySelf from "../src/data/myself.json"
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-[#012A4A] max-w-6xl mx-auto min-h-screen">
      <div className="p-10">
        <Header />
        <div className="sm:flex-row flex-col sm:flex gap-x-16">
          <div>
            <WorkingExp />
            <Skills />
          </div>
          <Education />
        </div>
        <Projects data={mySelf} />
        <Footer author={"M. Shajid Shafee"}/>
      </div>
    </div>
  );
};

export default App;
