var numberOfParticipants = prompt("Enter the number of participants:");


numberOfParticipants = parseInt(numberOfParticipants);


var participantNames = [];


for (var i = 0; i < numberOfParticipants; i++) {
  var participantName = prompt("Enter the name of participant " + (i + 1) + ":");
  participantNames.push(participantName);
}


participantNames.sort();


var orderedList = document.createElement("ol");


for (var j = 0; j < participantNames.length; j++) {
  var listItem = document.createElement("li");
  listItem.textContent = participantNames[j];
  orderedList.appendChild(listItem);
}


document.body.appendChild(orderedList);
