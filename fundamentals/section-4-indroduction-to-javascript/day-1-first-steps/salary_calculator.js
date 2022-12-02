
const gross_salary = 3000.00;

let inss_aliquot;
let ir_aliquot_tax;
let ir_part;

// INSS
if (gross_salary > 5189.82) {
  inss_aliquot = 570.88;
} else if (gross_salary > 2594.93) {
  inss_aliquot = gross_salary * 0.11;
} else if (gross_salary > 1556.95) {
  inss_aliquot = gross_salary * 0.09;
} else {
  inss_aliquot = gross_salary * 0.08;
}


let base_salary = gross_salary - inss_aliquot

//IR
if (base_salary > 4664.68) {
  ir_aliquot_tax = 0.275
  ir_part = 869.36
} else if (base_salary > 3751.06) {
  ir_aliquot_tax = 0.225
  ir_part = 636.13
} else if (base_salary > 2826.66) {
  ir_aliquot_tax = 0.15
  ir_part = 354.80
} else if (base_salary > 1903.99) {
  ir_aliquot_tax = 0.075
  ir_part = 142.80
} else {
  ir_aliquot_tax = 0
  ir_part = 0
}

let liquid_salary = base_salary - ((base_salary * ir_aliquot_tax) - ir_part)

console.log(liquid_salary);


