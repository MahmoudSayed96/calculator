// Variables Decleration
let current = "";
let previous = null;
let opratorClicked = false;
let oprator = null;
let display = "";
let result = "0";

// ### Functions & Oprators

// Clear Function
function ce() {
  result = "0";
  display = "";
  previous = "";
  current = "";
  output();
}

// Sign oprator
function sign() {
  // Check the current number is negitive or positive sign
  current = current.charAt(0) === "-" ? current.slice(1) : `-${current}`;
  display = current;
  output();
}

// precentag oprator
function precentag() {
  current = `${parseFloat(current) / 100}`;
  display = current;
  output();
}

// Append numbers
function appendNum(number) {
  // Check user click on one of oprations
  if (opratorClicked) {
    current = "";
    opratorClicked = false;
  }
  current = `${current}${number}`;
  display = current;
  output();
}

// Append dot
function dot() {
  if (current.indexOf(".") === -1) {
    appendNum(".");
  }
}

// Set previous
function setPrevious() {
  opratorClicked = true;
  previous = current;

  display = previous;
  output();
}

// Opration functions

function divide() {
  oprator = function(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
  };
  setPrevious();
  display += "/";
}

function times() {
  oprator = function(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
  };
  setPrevious();
  display += "*";
}

function minus() {
  oprator = function(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
  };
  setPrevious();
  display += "-";
}

function add() {
  oprator = function(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
  };
  setPrevious();
  display += "+";
}

// Equal oprator
function equal() {
  current = oprator(previous, current);
  result = current;
  output();
}

// Show result Output
function output() {
  // Show result
  document.getElementById("output").textContent = result;
  // Display math oprations
  document.getElementById("display").textContent = display;
}

