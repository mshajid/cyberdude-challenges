import { BiUpsideDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import Alert from "./Components/Alert";
import Cards from "./Components/Cards";
import CardImage from "./Components/CardsImage";
import CardBody from "./Components/CardsBody";
import CardsButton from "./Components/CardsButton";
import ButtonHeader from "./Layouts/ButtonHeader";
import ButtonsWrapper from "./Layouts/ButtonsWrapper";
import AlertHeader from "./Layouts/AlertHeader";

const App = () => {
  return (
    <div className="px-5 flex flex-col gap-y-4">
      <ButtonHeader />
      <ButtonsWrapper />
      <hr className="my-5" />
      <AlertHeader />
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
      <hr className="my-5" />
      <h2 className="font-bold text-4xl">Card Components</h2>
      <div className="flex gap-x-2">
        <Cards type={"normal"}>
          <CardImage link={"https://placehold.co/600x400"} />
          <CardBody
            title={"Card Title #1"}
            desc={
              "This is the first description of the card, You can edit here without any issue but I'll limit the characters for better UI"
            }
          />
          <CardsButton label={"Submit Here"} />
        </Cards>
        <Cards type={"normal"}>
          <CardImage link={"https://placehold.co/600x400"} />
          <CardBody
            title={"Card Title #2"}
            desc={
              "This is the first description of the card, You can edit here without"
            }
          />
          <CardsButton label={"Submit Here"} />
        </Cards>
      </div>
    </div>
  );
};

export default App;