import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const MainForm = () => {
  const { register, handleSubmit } = useForm();
  const formSubmit = (data) => {
    console.log("sending the data", data);  
  }
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(formSubmit)}>
          <Input
            name="bucketList"
            placeholder={"Enter your bucket list?"}
            register={register("bucketList")}
          />
          <Button label={"Submit now"} />
        </form>
      </div>
    </>
  );
};

export default MainForm;
