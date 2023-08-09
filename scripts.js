const buttons = document.body.getElementsByTagName("button");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equal = document.getElementById("equal");

//function

result.value = "";
console.log(result.value);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if (
      buttons[i].value !== "delete" &&
      buttons[i].value !== "reset" &&
      buttons[i].value !== "=" &&
      buttons[i].value !== "+" &&
      buttons[i].value !== "-" &&
      buttons[i].value !== "x" &&
      buttons[i].value !== "/"
    ) {
      result.textContent += buttons[i].value;
      result.value += buttons[i].value;
      console.log(result.value);
    }
    if (buttons[i].value === "reset") {
      result.value = "";
      result.textContent = "";
      console.log(result.value);
    }
    if (buttons[i].value === "delete") {
      result.value = result.value.slice(0, -1);
      result.textContent = result.value;
      console.log(result.value);
    }

    //operation definitions
    if (buttons[i].value === "+") {
      console.log("+");
      operator = "+";
      storedValue = parseFloat(result.value);
      result.value = "";
      result.textContent = "";
    }
    if (buttons[i].value === "-") {
      console.log("-");
      operator = "-";
      storedValue = parseFloat(result.value);
      result.value = "";
      result.textContent = "";
    }
    if (buttons[i].value === "x") {
      console.log("x");
      operator = "x";
      storedValue = parseFloat(result.value);
      result.value = "";
      result.textContent = "";
    }
    if (buttons[i].value === "/") {
      console.log("/");
      operator = "/";
      storedValue = parseFloat(result.value);
      result.value = "";
      result.textContent = "";
    }

    // operation results
    if (buttons[i].value === "=") {
      console.log("=");
      const currentInput = parseFloat(result.value);
      if (operator === "+") {
        const sum = storedValue + currentInput;
        result.value = sum.toString();
        result.textContent = sum.toString();
        operator = "";
      }
      if (operator === "-") {
        const subtract = storedValue - currentInput;
        result.value = subtract.toString();
        result.textContent = subtract.toString();
        operator = "";
      }
      if (operator === "x") {
        const multiply = storedValue * currentInput;
        result.value = multiply.toString();
        result.textContent = multiply.toString();
        operator = "";
      }
      if (operator === "/") {
        const division = storedValue / currentInput;
        result.value = division.toString();
        result.textContent = division.toString();
        operator = "";
      }
    }
  });
}

//styles

const toggleThemeButton = document.querySelector(".toggle");
let toggleClickCount = 0;

toggleThemeButton.addEventListener("click", () => {
  toggleClickCount++;
  let body = document.querySelector("body");
  let container = document.querySelector(".container");
  let circle = document.querySelector(".circle");
  let deleteBtn = document.querySelector(".delete");
  let toggleBackground = document.querySelector(".toggle");

  if (toggleClickCount === 1) {
    toggleThemeButton.classList.remove("toggle-click-2", "toggle-click-3");
    toggleThemeButton.classList.add("toggle-click-1");
    toggleBackground.classList.add("theme-2-toggle");

    body.classList.add("theme-2");
    container.classList.remove("theme-1-container");
    container.classList.add("theme-2-container");

    circle.classList.add("theme-2-circle");

    result.classList.add("theme-2-result");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("theme-2-buttons");
    }
    deleteBtn.classList.remove("theme-1-delete");
    deleteBtn.classList.add("theme-2-delete");
    reset.classList.remove("theme-1-reset");
    reset.classList.add("theme-2-reset");
    equal.classList.remove("theme-1-equal");
    equal.classList.add("theme-2-equal");
  } else if (toggleClickCount === 2) {
    toggleThemeButton.classList.remove("toggle-click-1", "toggle-click-3");
    toggleThemeButton.classList.add("toggle-click-2");
    toggleBackground.classList.add("theme-3-toggle");

    body.classList.add("theme-3");
    container.classList.add("theme-3-container");
    circle.classList.add("theme-3-circle");

    result.classList.add("theme-3-result");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("theme-3-buttons");
    }
    deleteBtn.classList.add("theme-3-delete");
    reset.classList.remove("theme-2-reset");
    reset.classList.add("theme-3-reset");
    equal.classList.remove("theme-2-equal");
    equal.classList.add("theme-3-equal");
  } else if (toggleClickCount === 3) {
    toggleThemeButton.classList.remove("toggle-click-1", "toggle-click-2");
    toggleThemeButton.classList.add("toggle");
    toggleBackground.classList.remove("theme-2-toggle", "theme-3-toggle");
    toggleBackground.classList.add("theme-1-toggle");
    toggleClickCount = 0;

    body.classList.remove("theme-2", "theme-3");

    container.classList.remove("theme-2-container", "theme-3-container");
    container.classList.add("theme-1-container");

    circle.classList.remove("theme-2-circle", "theme-3-circle");
    circle.classList.add("theme-1-circle");

    result.classList.remove("theme-2-result", "theme-3-result");
    result.classList.add("theme-1-result");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("theme-2-buttons", "theme-3-buttons");
    }
    deleteBtn.classList.remove("theme-2-delete", "theme-3-delete");
    deleteBtn.classList.add("theme-1-delete");
    reset.classList.remove("theme-3-reset");
    reset.classList.add("theme-1-reset");
    equal.classList.remove("theme-3-equal");
    equal.classList.add("theme-1-equal");
  }
});
