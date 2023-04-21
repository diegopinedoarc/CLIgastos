import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);
//Funcion que recibe los datos del prompt ingresador por el usuario
export async function promptNewBill() {
  return await inquirer.prompt(newBill);
}

//Datos a ingresar por el usuario
const newBill = [
  {
    type: "input",
    name: "billName",
    messagge: "Gasto: ",
  },
  {
    type: "input",
    name: "price",
    messagge: "Precio ",
  },
  {
    type: "date",
    name: "payment_Day",
    messagge: "Fecha de pago: ",
  },
];
