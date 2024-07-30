//this module enable us to read input from the terminal;
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

function calculateSum(...args) {
  let numArray = [];
  let sum = 0;
  args.forEach(num => {
    //convert invalid input to zero. 
    num = parseFloat(num, 10) || 0;
    if (num !== 0) numArray.push(num);
    sum += num;
  })
  return { sum: sum, array: numArray.join(" + ") }

}
const message = ` HOW THE PROGRAM WORKS\n1. Enter the series of number you want to calculate their sum.\n2. Type "calculate" or "CALCULATE" to prompt the program to calculate the final sum.\nEnter number:`

console.log(message);
const inputArray = [];
//NOTE: input entered into the terminal are parsed as string.
rl.on("line", userInput => {
  userInput = userInput.toLowerCase();
  let shouldCalculate = userInput === "calculate" ? true : false;

  if (shouldCalculate) {
    const {sum, array} = calculateSum(...inputArray);
    console.log(`THE SUM OF `, array, " = ", sum);
    rl.close();
  }

  inputArray.push(userInput);
})