import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useState, useRef } from "react";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [value, setValue] = useState([]);

  const formReset = useRef();

  const formSubmit = (data) => {
    setValue([data, ...value]);
    formReset.current.reset();
  };

  const handleDelete = (data) => {
    const newList = value.filter((list) => {
      return data !== list;
    });

    setValue(newList);
  };

  const finalOutput = value.map((data, index) => {
    return (
      <li
        className="flex items-center justify-between bg-[#36393e] my-2 px-2 py-2 text-gray-400 text-[16px] tracking-wide rounded hover:bg-[#282b30] hover:text-white transition-all"
        key={index}
      >
        {data.bucketList}
        <span
          onClick={() => handleDelete(data)}
          className="bg-black text-white px-2 text-xs rounded-md py-1 hover:bg-rose-300 hover:text-black cursor-pointer transition-all"
        >
          Delete
        </span>
      </li>
    );
  });

  console.log(errors);

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <form
          className="flex justify-center items-center gap-x-2"
          onSubmit={handleSubmit(formSubmit)}
          ref={formReset}
        >
          <Input
            name="bucketList"
            placeholder={"Enter your bucket list?"}
            register={register("bucketList", {
              required:
                "Bucket lists cannot be empty, Instead add one you like to achieve this year! 😁",
              minLength: {
                value: 5,
                message:
                  "Enter a valid bucket list not trash, Atleast 5 characters or more!",
              },
            })}
          />
          <Button label={"Submit now"} />
        </form>
        {errors.bucketList && (
          <div className="text-rose-300 tracking-wider text-sm py-0.5 flex justify-center bg-[#424549] w-full items-center rounded mt-2 h-10">
            {errors.bucketList.message}
          </div>
        )}
        <div>
          <h2 className="text-3xl text-center mt-20 mb-10 font-semibold text-white">
            My Bucket Lists
          </h2>
          {value.length > 0 ? (
            <ul>{finalOutput}</ul>
          ) : (
            <p className="text-2xl bg-[#424549] h-56 flex items-center justify-center rounded-md font-medium text-white">No Bucket Lists Added Yet 😭</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainForm;
