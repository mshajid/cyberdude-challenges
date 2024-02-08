import FormInputs from "./FormInputs";

const Form = () => {
  return (
    <>
      <FormInputs
        id={"firstName"}
        type={"text"}
        placeholder={"Enter your first name here"}
        value={""}
        label={"First Name"}
      />
    </>
  );
};

export default Form;
