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
        placeholder={"eg: Billa Ranga"}
        register={register("travelerName")}
      />
      <FormInput
        label={"Add Your Favorite Place"}
        name={"favoritePlace"}
        placeholder={"eg: Galle Face Green"}
        register={register("favoritePlace")}
      />
      <FormInput
        label={"Add Location"}
        name={"location"}
        placeholder={"eg: Colombo 12"}
        register={register("location")}
      />
      <FormInput
        label={"Leisure Type"}
        name={"lesiureType"}
        placeholder={"eg: Beach"}
        register={register("leisureType")}
      />
      <FormButton label={"Submit Your Place Here"} />
    </form>
  );
};

export default MainForm;
