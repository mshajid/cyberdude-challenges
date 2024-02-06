import Button from "./Components/Button";
import { BiDollar } from "react-icons/bi";

const App = () => {
  return (
    <div className="px-5 flex flex-col gap-y-4">
      <div>
      <h2 className="font-bold text-4xl">Buttons</h2>
      <span className="text-lg">Check all the button variants here with all the live examples</span>
      </div>
      <div className="flex gap-x-5">
        <Button variant="Primary" />
        <Button variant="Secondary" />
        <Button variant="Success" />
        <Button variant="Warning" />
        <Button variant="Danger" />
        <Button variant="Info" />
        <Button variant="Light" />
        <Button variant="Dark" />
      </div>
      <h2 className="font-semibold text-2xl">Buttons With Icons</h2>
      <div>
        <Button className={"flex shadow-lg items-center gap-x-2"} variant="Primary">
          <BiDollar />
        </Button>
      </div>
    </div>
  );
};

export default App;
