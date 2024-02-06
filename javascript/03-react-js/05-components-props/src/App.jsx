import Button from "./Components/Button";
import { BiDollar, BiUpsideDown } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import Alert from "./Components/Alert";

const App = () => {
  return (
    <div className="px-5 flex flex-col gap-y-4">
      <div>
        <h2 className="font-bold text-4xl">Buttons</h2>
        <span className="text-lg">
          Check all the button variants here with all the live examples
        </span>
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
      <div className="flex gap-x-5">
        <Button
          className={"flex shadow-md items-center gap-x-2"}
          variant="Primary"
        >
          <BiDollar />
        </Button>
        <Button
          className={"flex shadow-md items-center gap-x-2"}
          variant="Light"
        >
          <BiDownload />
        </Button>
        <Button
          className={"flex shadow-md items-center gap-x-2"}
          variant="Success"
        >
          <FaCheck />
        </Button>
      </div>
      <hr className="my-5" />
      <div>
        <h2 className="font-bold text-4xl">Alerts</h2>
        <span className="text-lg">
          Check all the Alerts variants here with all the live examples,
          Included, With Link & Icons also without Links & Icons
        </span>
      </div>
      <div className="space-y-2">
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Primary"}
          label={`This is Primary Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Secondary"}
          label={`This is Secondary Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Success"}
          label={`This is Success Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Warning"}
          label={`This is Warning Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Danger"}
          label={`This is Danger Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-1"}
          variant={"Info"}
          label={`This is Info Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        />
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-3 items-center"}
          variant={"Primary"}
          label={`This is Primary Alert - `}
          link={"With Link"}
          linkTo={"https://google.com"}
        >
          <FaCheck />
        </Alert>
        <Alert
          className={"max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-3 items-center"}
          variant={"Success"}
          label={`This is Info Alert Without Link But Icon`}
        >
          <BiUpsideDown />
        </Alert>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default App;
