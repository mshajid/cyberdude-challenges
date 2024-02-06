import Button from "./Components/Button";

const App =() => {
  return (
    <div className="px-5 flex gap-x-2">
      <Button variant="Primary" />
      <Button variant="Secondary" />
      <Button variant="Success" />
      <Button variant="Warning" />
      <Button variant="Danger" />
      <Button variant="Info" />
      <Button variant="Light" />
      <Button variant="Dark" />
    </div>
  )
}

export default App;