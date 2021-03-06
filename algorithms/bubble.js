import { speed } from "../app.js";
import { terminate } from "../initiate.js";
import { closeTerminate, enableSlider } from "../index.js";
import { baseColors, uiColors, algoColors } from "../config.js";
// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// CONDITION
function checkCondition(i, j) {
  if (i >= j) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, speed);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, speed);
    });
  }
}

export async function bubbleSort() {
  console.log("Bubble Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }
  // SORT
  for (let i = 0; i < divHeight.length; i++) {
    for (let j = 0; j < divHeight.length - i - 1; j++) {
      const condition = await checkCondition(divHeight[j], divHeight[j + 1]);
      if (await condition) {
        let temp = divHeight[j];
        divHeight[j] = divHeight[j + 1];
        divHeight[j + 1] = temp;
        // UPDATE DIV
        divEl[j].style.height = `${divHeight[j]}px`;
        divEl[j + 1].style.height = `${divHeight[j + 1]}px`;
        // STYLE
        divEl[j + 1].style.backgroundColor = algoColors.valid;
        divEl[j].style.backgroundColor = algoColors.area;
      } else if ((await condition) === false) {
        if (divHeight[j + 1] <= divHeight[j + 2]) {
          divEl[j + 1].style.backgroundColor = algoColors.valid;
          divEl[j].style.backgroundColor = algoColors.area;
        } else {
          divEl[j + 1].style.backgroundColor = algoColors.err;
          divEl[j].style.backgroundColor = algoColors.area;
        }
      }
      // TERMINATE
      if (terminate === true) return false;
    }
  }
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = algoColors.finish;
    }
  }
  closeTerminate();
  enableSlider();
}
