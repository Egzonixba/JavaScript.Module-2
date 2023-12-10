var dogNames = [];


for (var i = 0; i < 6; i++) {
  var dogName = prompt("Enter the name of dog " + (i + 1) + ":");
  dogNames.push(dogName);
}


dogNames.sort(function(a, b) {
  return b.localeCompare(a);
});


var unorderedList = document.createElement("ul");


for (var j = 0; j < dogNames.length; j++) {
  var listItem = document.createElement("li");
  listItem.textContent = dogNames[j];
  unorderedList.appendChild(listItem);
}


document.body.appendChild(unorderedList);
