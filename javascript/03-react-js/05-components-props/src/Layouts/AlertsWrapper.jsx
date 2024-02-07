
import Alert from "../Components/Alert";
import { BiUpsideDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const AlertsWrapper = () => {
  return (
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
        className={
          "max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-3 items-center"
        }
        variant={"Primary"}
        label={`This is Primary Alert`}
      >
        <FaCheck />
      </Alert>
      <Alert
        className={
          "max-w-xl py-2 text-sm px-5 font-semibold flex gap-x-3 items-center"
        }
        variant={"Success"}
        label={`This is Info Alert Without Link But Icon`}
      >
        <BiUpsideDown />
      </Alert>
    </div>
  );
};

export default AlertsWrapper
