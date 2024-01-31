import Header from "./Components/Header";
import WorkingExp from "./Components/WorkingExp";

const App = () => {
  return (
    <div className="bg-[#012A4A] max-w-6xl mx-auto min-h-screen">
      <div className="p-10">
        <Header />
        <WorkingExp />
      </div>
    </div>
  );
};

export default App;
