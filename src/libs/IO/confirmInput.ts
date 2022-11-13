import { readlineSync } from ".";
import { onIncorrectInput } from "./getTypedInput";

export default async function confirmInput(
  text: string,
  incorrect: onIncorrectInput = {
    message: "Incorrect input. Try again",
  }
): Promise<boolean> {
  console.log(text);
  const value = await readlineSync();
  return String(value).toLowerCase().includes("y");
}
