import { readlineSync } from ".";
import { onIncorrectInput } from "./getTypedInput";
export type numberInput = "number";
export default async function getTypedInput(
  text: string,
  type: numberInput,
  incorrect: onIncorrectInput = {
    message: "Incorrect input. Try again",
  }
): Promise<number> {
  console.log(text);
  const value = await readlineSync();
  if (!value || !isNumber(value)) {
    console.log(incorrect.message);

    return await getTypedInput(text, type);
  }
  return +value;
}

function isNumber(n: any) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
