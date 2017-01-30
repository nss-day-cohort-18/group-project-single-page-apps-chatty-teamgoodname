var addMessageButton = document.getElementById("addMessageButton");
var messageContainer = document.getElementById("messageBoard");

// Add new message event listener
addMessageButton.addEventListener("click", function() {
	var newMessage = document.getElementById("newMessage");
	var newMessageSenderName = document.getElementById("newMessageName");


	// Get new message ID
	var idIndex = messageContainer.children.length;
	// Get name
	var nameOfSender = newMessageSenderName.value;
	// Get message text
	var messageText = newMessage.value;
	// Get Time
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + " pm";

	Chatty.addMessage(idIndex, nameOfSender, messageText, time);
});

newMessage.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("addMessageButton").click();
    }
});

//Event Listener for clearButton - Deactivate clearButton when message list is empty
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
	document.getElementById("messageBoard").innerHTML = "";
  });

// clearButton[0].setAttribute("disabled", true);


function createMessageElement(messageIdNumber, nameOfPerson, messageText, timeSent){


	// Create <div> element to hold each message
	var messageElement = document.createElement("DIV");


	messageElement.id = "message--" + messageIdNumber;
	messageElement.className = "col-sm-12";

	// Create paragraph element to hold message sender's name
	var nameElement = document.createElement("P");
	nameElement.className = "messageElement";
	nameElement.style.display = "inline";
	nameElement.innerHTML = nameOfPerson/*.bold()*/ + " -->  ";

	// Create paragraph element to hold the message content
	var messageTextElement = document.createElement("P");
	messageTextElement.className = "messageElement";
	messageTextElement.style.display = "inline";
	messageTextElement.innerHTML = messageText;
	messageTextElement.style.marginLeft = "5%";

	// Create delete button
	var deleteButtonElement = document.createElement("INPUT");
	deleteButtonElement.type="button";
	deleteButtonElement.id = "delete--" + messageIdNumber;
	deleteButtonElement.className = "messageElement";
	deleteButtonElement.style.display = "inline";
	deleteButtonElement.style.float = "right";
	deleteButtonElement.value = "Delete";
	deleteButtonElement.style.marginTop = "1%";

	// Chatty.getUserMessages();
	deleteButtonElement.addEventListener("click", Chatty.deleteOneMessage);

	// Create paragraph element to hold the time that the message is sent
	var timeElement = document.createElement("P");
	timeElement.innerHTML = timeSent;

	messageElement.style.marginTop = "1%";
	messageElement.style.marginBottom = "1%";
	messageElement.style.borderBottom = "1px solid black";


	messageElement.appendChild(nameElement);
	messageElement.appendChild(messageTextElement);
	messageElement.appendChild(deleteButtonElement);
	messageElement.appendChild(timeElement);

	

	return messageElement;
};
