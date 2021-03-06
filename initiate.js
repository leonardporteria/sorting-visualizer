import { bubbleSort } from "./algorithms/bubble.js";
import { quickSortLomuto } from "./algorithms/quickLomuto.js";
import { mergeSort } from "./algorithms/merge.js";
import { selectionSort } from "./algorithms/selection.js";
import { insertionSort } from "./algorithms/insertion.js";
import { heapSort } from "./algorithms/heap.js";
import { quickHoareSort } from "./algorithms/quickHoare.js";
import { cocktailShaker } from "./algorithms/cocktail.js";
import { disableSlider, enableSlider } from "./index.js";

export let sortChoice = 0;

// BUBBLE SORT BUTTON
const bubbleSortBtn = document.querySelector(".algorithms__bubble");
bubbleSortBtn.addEventListener("click", () => (sortChoice = 1));

// MERGE SORT BUTTON
const mergeSortBtn = document.querySelector(".algorithms__merge");
mergeSortBtn.addEventListener("click", () => (sortChoice = 2));

// INSERTION SORT BUTTON
const insertionSortBtn = document.querySelector(".algorithms__insertion");
insertionSortBtn.addEventListener("click", () => (sortChoice = 3));

// SELECTION SORT BUTTON
const selectionSortBtn = document.querySelector(".algorithms__selection");
selectionSortBtn.addEventListener("click", () => (sortChoice = 4));

// QUICK SORT [LOMUTO] BUTTON
const quickLomutoSortBtn = document.querySelector(".algorithms__quickLomuto");
quickLomutoSortBtn.addEventListener("click", () => (sortChoice = 5));

// QUICK SORT [HOARE] SORT BUTTON
const quickHoareSortBtn = document.querySelector(".algorithms__quickHoare");
quickHoareSortBtn.addEventListener("click", () => (sortChoice = 6));

// HEAP SORT BUTTON
const heapSortBtn = document.querySelector(".algorithms__heap");
heapSortBtn.addEventListener("click", () => (sortChoice = 7));

// COCKTAIL SHAKER BUTTON
const cocktailShakerBtn = document.querySelector(".algorithms__cocktail");
cocktailShakerBtn.addEventListener("click", () => (sortChoice = 8));

// START SORT BUTTON
const start = document.querySelector(".generate__start");
export let terminate = false;

start.addEventListener("click", () => {
  if (sortChoice === 0) return;
  // UPDATE START BUTTON
  if (start.classList.contains("start")) {
    console.log("Started");
    terminate = false;
  } else if (start.classList.contains("terminate")) {
    console.log("Terminated");
    enableSlider();
    terminate = true;
    return;
  }

  if (sortChoice === 1) {
    disableSlider();
    bubbleSort();
  } else if (sortChoice === 2) {
    disableSlider();
    mergeSort();
  } else if (sortChoice === 3) {
    disableSlider();
    insertionSort();
  } else if (sortChoice === 4) {
    disableSlider();
    selectionSort();
  } else if (sortChoice === 5) {
    disableSlider();
    quickSortLomuto();
  } else if (sortChoice === 6) {
    disableSlider();
    quickHoareSort();
  } else if (sortChoice === 7) {
    disableSlider();
    heapSort();
  } else if (sortChoice === 8) {
    disableSlider();
    cocktailShaker();
  }
});
