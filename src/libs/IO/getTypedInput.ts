import { getTypedInputNumber } from ".";
import { numberInput } from "./getTypedInputNumber";

type inputTypes = numberInput;
export type onIncorrectInput = {
  message: string;
};
export default function getTypedInput(
  text: string,
  type: inputTypes = "number",
  incorrect: onIncorrectInput = {
    message: "Incorrect input",
  }
) {
  switch (type) {
    case "number":
      return getTypedInputNumber(text, "number", incorrect);
  }
}
