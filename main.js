const btns = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const equal = document.getElementById("equal");
const ac = document.getElementById("ac");
const de = document.getElementById("de");
let calculation = "";
let ans;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculation += btn.value;
    display.value = calculation;
  });
});

equal.addEventListener("click", () => {
  ans = eval(calculation);
  display.value = ans;
  calculation = ans.toString();
});

ac.addEventListener("click", () => {
  display.value = 0;
  calculation = "";
});

de.addEventListener("click", () => {
  if (calculation.length) {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
  }
});
