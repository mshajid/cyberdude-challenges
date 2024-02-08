import { useState } from "react";
import FormInputs from "./FormInputs";

const Form = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]:value });
    console.log(form);
  };
  return (
    <>
      <FormInputs
        name={"firstName"}
        id={"firstName"}
        type={"text"}
        placeholder={"Enter your first name here"}
        value={form.firstName}
        label={"First Name"}
        handleOnChange={handleInputs}
      />
      <FormInputs
        name={"lastName"}
        id={"lastName"}
        type={"text"}
        placeholder={"Enter your last name here"}
        value={form.lastName}
        label={"Last Name"}
        handleOnChange={handleInputs}
      />
    </>
  );
};

export default Form;
