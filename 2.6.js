function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }


  var diceResults = [];
  var rollResult;

  do {
    rollResult = rollDice();
    diceResults.push(rollResult);
  } while (rollResult !== 6);


  var unorderedList = document.createElement("ul");


  for (var i = 0; i < diceResults.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Roll " + (i + 1) + ": " + diceResults[i];
    unorderedList.appendChild(listItem);
  }


  document.body.appendChild(unorderedList);