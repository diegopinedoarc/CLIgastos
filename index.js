import fs from "fs";
import inquirer from "inquirer";

import { get, save } from "./filesMethods.js";
import { promptNewBill } from "./userPrompts.js";

const main = async () => {
  let proceed = true;
  while (proceed) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "...",
        choices: [
          { value: 1, name: "Show all bills" },
          { value: 2, name: "Submit new bill" },
          { value: 99, name: "Exit" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await getAllBills();
        break;
      case 2:
        await createNewBill();
        break;
      case 99:
        proceed = false;
        break;
      default:
        proceed = false;
        break;
    }
  }
  console.log("See you next time");
};

main();
//funcion para crear nueva boleta de gasto
async function createNewBill() {
  console.log("Adding new bill...");
  const newBillData = await promptNewBill();
  console.log("New data to create: ", newBillData);
  const currentBills = await get("bills");
  currentBills.push(newBillData);
  await save("bills", currentBills);
}
//funcion para traer las boletas
async function getAllBills() {
  const currentBills = await get("bills");
  console.log(currentBills);
}
