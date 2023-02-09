import "./style.css";
import validator from "validator";

const input = document.querySelector("input");
const dropdown = document.querySelector("select");
const buttonVal = document.querySelector("button");
const label = document.querySelector("#output-label");

const fieldSet = [
  { field: "CPF", validate: (value) => validator.isVAT(value, "BR") },
  { field: "Email", validate: (value) => validator.isEmail(value) },
  {
    field: "Phone",
    validate: (value) => validator.isMobilePhone(value, "pt-BR"),
  },
  { field: "CEP", validate: (value) => validator.isVAT(value, "BR") },
  {
    field: "Date",
    validate: (value) => validator.isDate(value, { format: "DD/MM/YYYY" }),
  },
];

