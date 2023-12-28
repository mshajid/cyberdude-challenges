import JustValidate from "just-validate";

const validate = new JustValidate("#parathaForm");

validate.addField("#fullName", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 2,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);

validate.addField("#contactNum", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 10,
  },
]);

validate.addField("#deliveryAddress", [
  {
    rule: "required",
  },
]);

validate.addField("#parathaQty", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 1,
  },
  {
    rule: "maxLength",
    value: 3,
  },
]);
