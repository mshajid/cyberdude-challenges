import { useState } from "react";
import FormInputs from "./FormInputs";
import FormButton from "./FormButton";

const Form = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [formValues, setFormValues] = useState([]);
  const [formError, setFormError] = useState({
    firstName: null,
    lastName: null,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    // Validation starts here
    if (name === "firstName") {
      if (value.length < 4) {
        setFormError({
          firstName: "First Name Validation is Failed",
        });
      } else {
        setFormError((prev) => ({
          ...prev,
          firstName: "",
        }));
      }
    }

    if (name === "lastName") {
      if (value.length < 4) {
        setFormError({ lastName: "Last Name Validation is Failed" });
      } else {
        setFormError((prev) => ({
          ...prev,
          lastName: "",
        }));
      }
    }

    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("submitted");
    setFormValues([...formValues, form]);
    setForm({ firstName: "", lastName: "" });
  };

  const mapFormValues = formValues.map((value) => {
    return (
      <div className="border border-slate-500 w-60 h-14 rounded-md flex flex-col items-start justify-center px-2 my-2 text-sm hover:bg-gradient-to-r from-slate-900 to-slate-700 hover:text-white transition-all">
        <div className="flex gap-x-2 items-center">
          <span className="font-semibold">First Name:</span>
          <span className="font-regular">{value.firstName}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="font-semibold">Last Name:</span>
          <span className="font-regular">{value.lastName}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      <form id="myForm" onSubmit={submitForm}>
        <div className="flex flex-col gap-y-2">
          <FormInputs
            name={"firstName"}
            id={"firstName"}
            type={"text"}
            placeholder={"Enter your first name here"}
            value={form.firstName}
            label={"First Name"}
            handleOnChange={handleInputs}
            required
          />
          {formError.firstName ? (
            <small className="bg-red-500 px-2 rounded w-fit text-white">
              {formError.firstName}
            </small>
          ) : (
            ""
          )}
          <FormInputs
            name={"lastName"}
            id={"lastName"}
            type={"text"}
            placeholder={"Enter your last name here"}
            value={form.lastName}
            label={"Last Name"}
            handleOnChange={handleInputs}
            required
          />
          {formError.lastName ? (
            <small className="bg-red-500 px-2 rounded w-fit text-white">
              {formError.lastName}
            </small>
          ) : (
            ""
          )}
          <FormButton label={"Verify"} />
        </div>
      </form>
      <div className="my-10">
        <h2 className="text-xl font-semibold">Users Who Verified Right Now</h2>
        <div className="flex gap-x-2 w-[500px] flex-wrap">{mapFormValues}</div>
      </div>
    </div>
  );
};

export default Form;
