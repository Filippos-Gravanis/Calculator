let operation = {
  number1: "",
  number2: "",
  operator: "",
};
console.log(1);
let Buttons = document.querySelectorAll("button");
let Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function updateDisplay(){
    const pastDisplay = document.querySelector(".calculatorPastDisplay")
    const currentDisplay = document.querySelector(".calculatorCurentDisplay")
    if (operation.operator == "") currentDisplay.textContent = operation.number1
    else if(operation.operator != "" && operation.number2=="") {currentDisplay.textContent = operation.number1}
    else{currentDisplay.textContent=operation.number2}

}

for (let button of Buttons) {
  if (Numbers.includes(button.id)) {
    button.addEventListener("click", () => {
      updateDisplay()
      if (operation.number1 == "0") {
        operation.number1 = button.id;
      }
      else if (operation.number2 == "0") {
        operation.number2 = button.id;
      } 
      else if (operation.number2 == "" && operation.operator != "") {
        console.log(1)
        operation.number2 = button.id;
      }
      else if (operation.number2 != "" && operation.operator != "") {
        operation.number2 += button.id;
      }
      else if (operation.number1 != "0") {
        operation.number1 += button.id;
      } 
      
      console.log(operation);
      updateDisplay()
    });
    
  } else if (["+", "-", "*", "/"].includes(button.id)) {
    button.addEventListener("click", () => {
      updateDisplay()
      if (operation.number2 != "" && operation.operator != "") {
        operation.number1= String(operate(
          operation.operator,
          parseInt(operation.number1),
          parseInt(operation.number2)
          
          ))
          
        operation.operator = button.id;
        operation.number2 = "";
      }
      else if(operation.operator != "" && operation.number2 == ""){
        operation.operator = button.id;
      }
      else if (operation.operator == "") {
        operation.operator = button.id;
      }
      console.log(operation);
      updateDisplay()
    });
  } else if (button.id == "C") {
    button.addEventListener("click", () => {
      operation.number1 = "0";
      operation.number2 = "";
      operation.operator = "";
      updateDisplay()
    });
    console.log(operation);
  } else if (button.id == "=") {
    button.addEventListener("click", () => {
      updateDisplay()
      if (operation.number2 != "" && operation.operator != "") {
        operation.number1 = String(operate(
          operation.operator,
          parseInt(operation.number1),
          parseInt(operation.number2)
        ));
        operation.operator = "";
        operation.number2 = "";
        console.log(operation)
        updateDisplay()
      }
    });
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);
  }
}
