import Button from "./Components/Button";

const App = () => {
  return (
    <div className="px-5 flex flex-col gap-y-2">
      <h2 className="font-semibold text-4xl">Buttons</h2>
      <span className="text-lg">Check all the button variants here with all the live examples</span>
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
    </div>
  );
};

export default App;
