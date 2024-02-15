import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const MainForm = () => {
  const { register, handleSubmit } = useForm();

  const [value, setValue] = useState([]);

  const formSubmit = (data) => {
    setValue([data, ...value]);
  };

  const finalOutput = value.map((data, index) => {
    return (
      <li
        className="flex items-center justify-between bg-[#E2B4BD] my-2 px-2 py-0.5 rounded"
        key={index}
      >
        {data.bucketList}
        <span className="bg-black text-white px-2 text-xs rounded-md py-1 hover:bg-gray-300 hover:text-black cursor-pointer">
          Delete
        </span>
      </li>
    );
  });

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <form
          className="flex justify-center items-center gap-x-2"
          onSubmit={handleSubmit(formSubmit)}
        >
          <Input
            name="bucketList"
            placeholder={"Enter your bucket list?"}
            register={register("bucketList")}
          />
          <Button label={"Submit now"} />
        </form>

        <div>
          <h2>My Bucket Lists</h2>
          <ul>{finalOutput}</ul>
        </div>
      </div>
    </>
  );
};

export default MainForm;
