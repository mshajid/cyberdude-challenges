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

  return (
    <>
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
    </>
  );
};

export default Form;
