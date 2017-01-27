
document.getElementById("messageBoard").innerHTML = "MY MESSAGE BLAH  BLAH BLAH BLAH";



var newMessage = document.getElementById("newMessage");
var addMessageButton = document.getElementById("addMessageButton");

addMessageButton.addEventListener("click", function() {
	console.log("Hi");
});

newMessage.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("addMessageButton").click();
    }
});

//Event Listener for clearButton - Deactivate clearButton when message list is empty
var clearButton = document.getElementById("clearButton");

clearButton[0].setAttribute("disabled", true);

clearButton.addEventListener("click", function() {

});


// Calls the Chatty method, getMessages(), and puts the returned array
// 	of message objects into the HTML container 
function populateMessages(){
	var messageContainer = document.getElementById("messageBoard");
	var messages = Chatty.getMessages();

	messageContainer.innerHTML = "";

	console.log("About to Populate Messages into DOM:\n", messages);

	for(var i = 0 ; i < messages.length; i++){
		var newMessageId = "message--" + i.toString();
		var newButtonId = "button--" + i.toString();

		console.log("Objects: ", messages[i].message);
		console.log("Name: ", messages[i].name);

		var newMessage = createMessageElement(i, messages[i].name, messages[i].message, messages[i].time);

		messageContainer.appendChild(newMessage);
	};
	console.log("DOM Populated");
};


function createMessageElement(messageIdNumber, nameOfPerson, messageText, timeSent){
	// Create <div> element to hold each message
	var messageElement = document.createElement("DIV");

	messageElement.id = "message--" + messageIdNumber;
	messageElement.className = "col-sm-12";

	// Create paragraph element to hold message sender's name
	var nameElement = document.createElement("P");
	nameElement.className = "messageElement";
	nameElement.style.display = "inline";
	nameElement.innerHTML = nameOfPerson.bold() + " -->  ";

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
}
