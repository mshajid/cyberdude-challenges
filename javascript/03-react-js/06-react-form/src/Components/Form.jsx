import { useState } from "react";
import FormInputs from "./FormInputs";
import FormButton from "./FormButton";

const Form = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [formValues, setFormValues] = useState([]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("submitted");
    setFormValues([...formValues, form]);
    setForm({ firstName: "", lastName: "" });
  };

  return (
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
        <FormButton label={"Verify"} />
      </div>
    </form>
  );
};

export default Form;
