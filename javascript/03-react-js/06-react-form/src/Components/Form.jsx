import { useForm } from "react-hook-form";
import FormInputs from "./FormInputs";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`border px-2 text-sm py-1.5 rounded outline-none ${errors.fullName ? 'border border-red-500' : 'border'}`}
          name="fullName"
          placeholder="Enter your name"
          type="text"
          {...register("fullName", {
            required: "Olunga name ah kududa vengi",
            minLength: {
              value: 3,
              message: "Requires more than 3 characters",
            },
          })}
        />
        {errors.fullName && (
          <small className="text-red-500 text-[10px] mb-2 -mt-1.5">
            {errors && errors.fullName.message}
          </small>
        )}
        <button className="bg-red-500 rounded px-2 py-0.5  text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
