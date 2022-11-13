import { getTypedInput } from "../libs/IO";
import { multiplyMatrix, transponate } from "../libs/matrix";

const activationFunction = (x: number) => {
  return x >= 0.5 ? 1 : 0;
};

async function getInputValues() {
  const isKasha = await getTypedInput("В столовой есть кашка? [1/0]", "number");
  const isTime = await getTypedInput("Есть время до пары? [1/0]", "number");
  const isReady = await getTypedInput("Студент готов к паре? [1/0]", "number");
  const isFriend = await getTypedInput("Друг идет в столовую? [1/0]", "number");
  return [isKasha, isTime, isReady, isFriend];
}
async function thinkAboutIt(): Promise<number> {
  const inputArray = await getInputValues();

  const w11 = [1, 0, 0, 0];
  const w12 = [0, 0.3, 0.3, 0];
  const w13 = [0, 0.3, 0, 0.3];

  const weight1 = [w11, w12, w13];
  const weight2 = [1, 1, 1];

  const sum_hidden = multiplyMatrix(weight1, transponate([inputArray]));
  console.log("Значения сумм на нейронах скрытого слоя: ", sum_hidden);

  const out_hidden = sum_hidden.map((el) => [activationFunction(el[0])]);
  console.log("Значения на выходах нейронов скрытого слоя: ", sum_hidden);

  const sum_end = multiplyMatrix([weight2], out_hidden);
  const y = activationFunction(sum_end[0][0]);
  console.log(`Выходное значение НС: ${y}`);

  return y;
}

thinkAboutIt().then((res) => {
  if (res) {
    console.log("Студент пойдет в столовую");
  } else {
    console.log("Студент не пойдет в столовую");
  }
});
