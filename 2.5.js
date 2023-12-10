
var givenNumbers = [];

while (true) {

  var userInput = prompt("Enter a number (enter 'stop' to finish):");


  if (userInput.toLowerCase() === 'stop') {
    break;
  }


  var number = parseFloat(userInput);


  if (givenNumbers.includes(number)) {
    console.log("The number " + number + " has already been given. Stopping operation.");
    break;
  }


  givenNumbers.push(number);
}


givenNumbers.sort(function(a, b) {
  return a - b;
});

console.log("Given numbers in ascending order:");
for (var i = 0; i < givenNumbers.length; i++) {
  console.log(givenNumbers[i]);
}
