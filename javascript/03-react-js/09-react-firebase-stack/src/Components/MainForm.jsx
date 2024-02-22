import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const MainForm = () => {
  const { register, handleSubmit } = useForm();

  const formSubmit = (data) => {
    return console.log(data)
  } 

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <h2>MainForm</h2>
      <FormInput
        label={"Traveler's Name Here"}
        name={"travelerName"}
        placeholder={"Enter traveler's full name here"}
        register={register("travelerName")}
      />
      <FormInput
        label={"Traveler's Name Here"}
        name={"travelerName"}
        placeholder={"Enter traveler's full name here"}
        register={register("travelerName")}
      />
      <FormInput
        label={"Traveler's Name Here"}
        name={"travelerName"}
        placeholder={"Enter traveler's full name here"}
        register={register("travelerName")}
      />
      <FormInput
        label={"Traveler's Name Here"}
        name={"travelerName"}
        placeholder={"Enter traveler's full name here"}
        register={register("travelerName")}
      />
      <FormButton label={"Submit Your Place Here"} />
    </form>
  );
};

export default MainForm;
