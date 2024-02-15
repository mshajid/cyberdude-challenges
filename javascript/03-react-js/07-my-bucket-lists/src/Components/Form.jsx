import { useForm } from "react-hook-form";
import Input from "./Input";

const Form = () => {
  const { register } = useForm();
  return (
    <>
      <div>
        <Input />
      </div>
    </>
  );
};

export default Form;
