import Cards from "./Components/Cards";
import CardImage from "./Components/CardsImage";
import CardBody from "./Components/CardsBody";
import CardsButton from "./Components/CardsButton";
import ButtonHeader from "./Layouts/ButtonHeader";
import ButtonsWrapper from "./Layouts/ButtonsWrapper";
import AlertHeader from "./Layouts/AlertHeader";
import AlertsWrapper from "./Layouts/AlertsWrapper";

const App = () => {
  return (
    <div className="px-5 flex flex-col gap-y-4">
      <ButtonHeader />
      <ButtonsWrapper />
      <hr className="my-5" />
      <AlertHeader />
      <AlertsWrapper />
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
