import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import FormButton from "./FormButton";
import { db } from "../firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateForm = () => {
  const { register, handleSubmit } = useForm();

  const [update, setUpdate] = useState([]);
  //   const [form, setForm] = useState({
  //     travelerName: "",
  //     districts: "",
  //     favoritePlace: "",
  //     districts: "",
  //     addImage: "",
  //     review: "",
  //   });

  const { id } = useParams();

  const updateForm = (data) => {
    async function getData() {
      await setDoc(doc(db, "Badulla", id), {
        addImage: data.addImage,
        districts: data.districts,
        favoritePlace: data.favoritePlace,
        leisureType: data.leisureType,
        review: data.review,
        travelerName: data.travelerName,
      });
    }
    getData();
  };

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "Badulla"));
      const mappedData = querySnapshot.docs.map((doc) => {
        const newid = doc.id;
        const data = doc.data();
        const finalData = { id: newid, ...data };
        console.log(data);
        return finalData;
      });
      setUpdate(mappedData);
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto my-12 h-screen">
      <div className="text-xl font-bold tracking-wide mb-2">Update Form</div>
      <form
        onSubmit={handleSubmit(updateForm)}
        className="flex flex-col gap-y-3"
      >
        <FormInput
          label={"Traveler's Name"}
          name={"travelerName"}
          register={register("travelerName")}
          placeholder={"eg: Billa Ranga"}
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
        <FormInput
          label={"Add an Image URL of the Location"}
          name={"addImage"}
          placeholder={"eg: Colombo-clock-tower.jpg"}
          register={register("addImage")}
        />
        <FormTextArea
          label={"Enter Your Review Here"}
          name={"review"}
          placeholder={"Enter your review here"}
          register={register("review")}
        />
        <FormButton
          onClick={() => handleUpdate(update)}
          label={"Update Your Place Here"}
        />
      </form>
    </div>
  );
};

export default UpdateForm;
