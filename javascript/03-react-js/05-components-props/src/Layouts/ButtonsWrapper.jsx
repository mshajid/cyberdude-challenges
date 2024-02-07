import Button from "../Components/Button";
import { BiDollar, BiUpsideDown } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const ButtonsWrapper = () => {
  return (
    <>
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
    </>
  );
};

export default ButtonsWrapper;
