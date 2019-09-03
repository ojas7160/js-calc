let clearButton = document.getElementById("clear");
let textArea = document.getElementById("output");
textArea.disabled = true;

let value = 0;
let action = "";
let output = 0;
let num = 0;
let prev = 0;

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

document.getElementById('ans').addEventListener('click', ans)

let addBtn = document.getElementById("+");
let subtractBtn = document.getElementById("-");
let multiplyBtn = document.getElementById("*");
let divideBtn = document.getElementById("/");

clearButton.addEventListener("click", () => {
  textArea.innerText = 0;
  value = 0
  action = '';
  output = 0;
  num = 0;
  prev = 0;
});

addBtn.addEventListener("click", () => {
  console.log(action)
  action = "add";
  if(output) {
    prev = output
    output = 0
    num = 0
  }
  console.log(action)
});

subtractBtn.addEventListener("click", () => {
  console.log(action)
  action = "subtract";
  if(output) {
    prev = output
    output = 0
    num = 0
  }
  console.log(action)
});

multiplyBtn.addEventListener("click", () => {
  console.log(action)
  action = "multiply";
  if(output) {
    prev = output
    output = 0
    num = 0
  }
  console.log(action)
});

divideBtn.addEventListener("click", () => {
  console.log(action)
  action = "divide";
  if(output) {
    prev = output
    output = 0
    num = 0
  }
  console.log(action)
});

function add(a, b) {
  reset(a, b);
  return a + b;
}

function sub(a, b) {
  reset(a, b);
  return a - b;
}

function mul(a, b) {
  reset(a, b);
  return a * b;
}

function divide(a, b) {
  reset(a, b);
  return a / b;
}

function reset (a, b){
  a = a ? a : 0
  b = b ? b : 0
}

function ans() {
  if (action === "add") {
    output = add(prev, output);
  } else if (action === "subtract") {
    output = sub(prev, output);
  } else if (action === "multiply") {
    output = mul(prev, output);
  } else if (action === "divide") {
    output = divide(prev, output);
  }
  textArea.innerText = output
}

function execute(event) {
  // value = parseInt(textArea.innerText)
  number = parseInt(event.target.innerText)
  value = value ? value : number;
  if(output) {
    textArea.innerText = parseInt(output + event.target.innerText);
    num = parseInt(output + event.target.innerText);
    output = num
  }
  else {
    textArea.innerText = number
    output = number
  }
  console.log(output)
  console.log(prev)

  if (action === "") {
    textArea.innerText = output;
    return;
  } else {
    
  }
}
