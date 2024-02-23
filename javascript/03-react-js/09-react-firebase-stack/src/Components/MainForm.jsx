import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormSelect from "./FormSelect";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const MainForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const formSubmit = async (data) => {
    console.log(data);
    // const docRef = await addDoc(collection(db, data.districts), data);
    const docRef = await addDoc(collection(db,data.districts), data);
    reset();
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(formSubmit)}>
      <h2>MainForm</h2>
      <FormInput
        label={"Traveler's Name Here"}
        name={"travelerName"}
        placeholder={"eg: Billa Ranga"}
        register={register("travelerName")}
      />
      <FormSelect
        name={"districts"}
        label={"Select The District"}
        register={register("districts")}
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
