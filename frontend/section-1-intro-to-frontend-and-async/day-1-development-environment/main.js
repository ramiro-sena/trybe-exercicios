import "./style.css";
import validator from "validator";

const input = document.querySelector("input");
const dropdown = document.querySelector("select");
const buttonVal = document.querySelector("button");
const label = document.querySelector("#output-label");

const fieldSet = [
  { name: "CPF", validate: (value) => validator.isVAT(value, "BR") },
  { name: "Email", validate: (value) => validator.isEmail(value) },
  {
    name: "Phone",
    validate: (value) => validator.isMobilePhone(value, "pt-BR"),
  },
  { name: "CEP", validate: (value) => validator.isPostalCode(value, "BR") },
  {
    name: "Date",
    validate: (value) => validator.isDate(value, { format: "DD/MM/YYYY" }),
  },
];

window.onload = () => {
  fieldSet.forEach((field) => {
    const option = document.createElement("option");
    option.innerText = field.name;
    dropdown.appendChild(option);
  });

  buttonVal.addEventListener("click", (event) => {
    event.preventDefault();
    const field = fieldSet.find((field) => field.name === dropdown.value);
    label.innerHTML = field.validate(input.value)
  });
};
