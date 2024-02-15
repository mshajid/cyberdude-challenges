// import { useForm } from "react-hook-form";
import Input from "./Input";

const MainForm = () => {
  //   const { register } = useForm();
  return (
    <>
      <div>
        <Input name={"bucketList"} placeholder={"Enter your bucket list?"}/>
      </div>
    </>
  );
};

export default MainForm;
