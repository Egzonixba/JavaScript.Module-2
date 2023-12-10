
var numbers = [];


var userInput;
do {
  userInput = prompt("Enter a number (enter 0 to stop):");
  var number = parseFloat(userInput);
  if (!isNaN(number)) {
    numbers.push(number);
  }
} while (userInput !== "0");


numbers.sort(function(a, b) {
  return b - a;
});


console.log("Numbers from largest to smallest:");
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
