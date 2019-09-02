var clearButton = document.getElementById("clear");
var textArea = document.getElementById("output");
var value = 0;
var action = "";

document.getElementById("7").addEventListener("click", execute);
document.getElementById("8").addEventListener("click", execute);
document.getElementById("9").addEventListener("click", execute);
document.getElementById("4").addEventListener("click", execute);
document.getElementById("5").addEventListener("click", execute);
document.getElementById("6").addEventListener("click", execute);
document.getElementById("1").addEventListener("click", execute);
document.getElementById("2").addEventListener("click", execute);
document.getElementById("3").addEventListener("click", execute);
document.getElementById("0").addEventListener("click", execute);

var addBtn = document.getElementById("+");
var subtractBtn = document.getElementById("-");
var multiplyBtn = document.getElementById("*");
var divideBtn = document.getElementById("/");

clearButton.addEventListener("click", () => {
  textArea.innerText = 0;
  value = 0
  action = ''
});

addBtn.addEventListener("click", () => {
  console.log(action)
  action = "add";
  console.log(action)
});

subtractBtn.addEventListener("click", () => {
  console.log(action)
  action = "subtract";
  console.log(action)
});

multiplyBtn.addEventListener("click", () => {
  console.log(action)
  action = "multiply";
  console.log(action)
});

divideBtn.addEventListener("click", () => {
  console.log(action)
  action = "divide";
  console.log(action)
});

function add(a, b) {
  a = a ? a : 0
  b = b ? b : 0
  return a + b;
}

function sub(a, b) {
  a = a ? a : 0
  b = b ? b : 0
  return a - b;
}

function mul(a, b) {
  a = a ? a : 0
  b = b ? b : 0
  return a * b;
}

function divide(a, b) {
  a = a ? a : 0
  b = b ? b : 0
  return a / b;
}

function execute(event) {
  console.log(value);
  // value = parseInt(textArea.innerText)
  number = parseInt(event.target.innerText)
  value = value ? value : number
  textArea.innerText = number;
  if (action === "") {
    textArea.innerText = number;
    return;
  } else {
    // value = parseInt(value);
    if (action === "add") {
      value = add(value, number);
    } else if (action === "subtract") {
      value = sub(value, number);
    } else if (action === "multiply") {
      value = mul(value, number);
    } else if (action === "divide") {
      value = divide(value, number);
    }
    textArea.innerText = value
  }
}
