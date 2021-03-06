var addMessageButton = document.getElementById("addMessageButton");
var messageContainer = document.getElementById("messageBoard");

var request = new XMLHttpRequest();
var userRequest = new XMLHttpRequest();

request.addEventListener("load", requestCompleted);
userRequest.addEventListener("load", usersRetrieved);

request.open("GET", "chatty.json");
userRequest.open("GET", "users.json");

userRequest.send();
request.send();

// Event handler for when JSON file is loaded
function requestCompleted(event){
	var tempJsonMessages = JSON.parse(event.target.responseText);
	// Load the JSON messages into the Chatty oject
	Chatty.setInitialMessages(tempJsonMessages);

	// Load JsonMessages into userMessages
	Chatty.passJsonMessages();

	// Populate the DOM (function in main.js)
	populateMessages(Chatty.getJsonMessages());
	// populateInitialMessages();
};

function usersRetrieved(event){
	var user1 = document.getElementById("user1");
	var user2 = document.getElementById("user2");

	user1.style.display = "inline";
	user2.style.display = "inline";

	user1.style.marginRight = "10px";
	user2.style.marginRight = "10px";

	var userData = JSON.parse(event.target.responseText);

	user1.innerHTML = userData[0].user_name;
	user2.innerHTML = userData[1].user_name;
};


// Add new message event listener
addMessageButton.addEventListener("click", function() {
	var newMessage = document.getElementById("newMessage");
	var newMessageSenderName = document.getElementById("newMessageName");

	var radio1 = document.getElementById("userRadio1");
	var radio2 = document.getElementById("userRadio2");

	var radioSender = "";

	if(radio1.checked){
		radioSender = radio1.value;
	}else if(radio2.checked){
		radioSender = radio2.value;
	}else{
		alert("Pleaase identify who you are.");
		return;
	};

	// Get new message ID
	var idIndex = messageContainer.children.length;
	// Get name
	var nameOfSender = radioSender;
	// Get message text
	var messageText = newMessage.value;
	// Get Time
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + " pm";

	Chatty.addMessageToArray(idIndex, nameOfSender, messageText, time);
	Chatty.addMessageToDOM(idIndex, nameOfSender, messageText, time);
});

// Event Listener for darkCheck and largeCheck- Change theme from light to dark and make font large
 var darkCheck = document.getElementById("dark-theme-select");
 var largeCheck = document.getElementById("large-text-select");
 
 darkCheck.addEventListener("click", makeDark);
 largeCheck.addEventListener("click", makeLarge);
 
////// Function that toggles the background and text colors
 function makeDark(tomato) {
 	var bodyContainer = document.getElementById("bodyContainer");
 	bodyContainer.classList.toggle("dark");
 	//debugger
 	var children = messageContainer.children;
 	for (var i = 0;i < children.length; i++) {
 		children[i].classList.toggle("dark");	
 	};
 };
 ////// Function that toggles the font size of the messages
 function makeLarge(tomato){
     var listOfMessages = document.getElementById("messageBoard");
     listOfMessages.classList.toggle("large-font");
     var children = messageContainer.children;
 	for (var i = 0; i < children.length; i++) {
 		children[i].classList.toggle("large-font");	
 	};
 };


document.getElementById("newMessage")
	.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13 && classList.contains("border")) {
        document.getElementById("addMessageButton").click();
    }
});

//Event Listener for clearButton - Deactivate clearButton when message list is empty
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function() {
	document.getElementById("messageBoard").innerHTML = "";
  });

function createMessageElement(messageIdNumber, nameOfPerson, messageText, timeSent){
	// Create <div> element to hold each message
	var messageElement = document.createElement("DIV");

	messageElement.id = "message--" + messageIdNumber;
	messageElement.className = "col-sm-12";

	// Create paragraph element to hold message sender's name
	var nameElement = document.createElement("P");
	nameElement.className = "messageElement";
	nameElement.style.display = "inline";
	nameElement.innerHTML = nameOfPerson + " wrote: ";
	nameElement.style.fontSize = "larger";

	// Create paragraph element to hold the message content
	var messageTextElement = document.createElement("P");
	messageTextElement.className = "messageElement";
	messageTextElement.style.display = "inline";
	messageTextElement.innerHTML = messageText;
	messageTextElement.style.marginLeft = "5%";
	messageTextElement.style.fontWeight = "normal";
	messageTextElement.style.backgroundColor = "lightblue";
	messageTextElement.style.border = "2px solid lightblue";
	messageTextElement.style.borderRadius = "20px 20px 20px 7.5px";
	messageTextElement.style.padding = "2%";
	messageTextElement.style.marginTop = "50px";

	// Create delete button
	var deleteButtonElement = document.createElement("INPUT");
	deleteButtonElement.type="button";
	deleteButtonElement.id = "delete--" + messageIdNumber;
	deleteButtonElement.className = "messageElement";
	deleteButtonElement.className +=" jsButtons"
	deleteButtonElement.style.display = "inline";
	deleteButtonElement.style.float = "right";
	deleteButtonElement.value = "Delete";
	deleteButtonElement.style.marginTop = "1%";
	deleteButtonElement.style.fontSize = "smaller";
	deleteButtonElement.style.borderRadius = "25px 25px 25px 25px";

	var readMessageButton = document.createElement("INPUT");
	readMessageButton.type="button";
	readMessageButton.className +="jsButtons"
	readMessageButton.id="read--" + messageIdNumber;
	readMessageButton.style.display = "inline";
	readMessageButton.style.float= "right";
	readMessageButton.value = "Read Message";
	readMessageButton.style.marginBottom = "5%";
	readMessageButton.style.fontSize = "smaller";
	readMessageButton.style.borderRadius = "25px 25px 25px 25px";

	// Chatty.getUserMessages();
	deleteButtonElement.addEventListener("click", Chatty.deleteOneMessageFromArray);
	deleteButtonElement.addEventListener("click", Chatty.deleteOneMessageFromDOM);
	readMessageButton.addEventListener("click", Chatty.readMessage);



	// Create paragraph element to hold the time that the message is sent
	var timeElement = document.createElement("P");
	timeElement.innerHTML = timeSent.italics();
	timeElement.style.display = "block";
	timeElement.style.fontWeight = "lighter";
	timeElement.style.fontSize = "smaller";
	timeElement.style.marginTop = "1%";


	messageElement.style.marginTop = "2%";
	messageElement.style.marginBottom = "2%";
	messageElement.style.borderBottom = "1px solid black";


	messageElement.appendChild(nameElement);
	messageElement.appendChild(messageTextElement);
	messageElement.appendChild(deleteButtonElement);
	messageElement.appendChild(timeElement);
	messageElement.appendChild(readMessageButton);
	messageElement.addEventListener("click", editMessages);

	return messageElement;
};

// Populate messages is called, but we can't createMessageElement until page2 is loaded
function populateMessages(messages){
	messageContainer.innerHTML = "";

	for(var i = 0 ; i < messages.length; i++){
		var newMessageId = "message--" + i.toString();
		var newButtonId = "button--" + i.toString();

		// Calls Chatty method to create a new <div> element that contains the formatted message
		var newMessage = createMessageElement(i, messages[i].name, messages[i].message, messages[i].time);

		messageContainer.appendChild(newMessage);

		//document.getElementById("delete--" + i).addEventListener("click", Chatty.deleteOneMessageFromArray);

	}

};

// Ability to edit messages
function editMessages(event) {

var newMessage = document.getElementById("newMessage");
var messageElement = document.getElementsByClassName("messageElement");
var messageText = newMessage.value;

var idIndex = ((event.currentTarget.id).substring(9, 10)).toString();
var messageToDelete = document.getElementById("message--" + idIndex);

addBorder(messageToDelete);
addFocus(messageToDelete);
}

function addBorder(message) {
	message.value = "";
	message.classList.toggle("border");
}

function addFocus(message) {
	newMessage.focus();
}


//edit message
newMessage.addEventListener("keyup", edit);

function edit(event) {
	var children = messageContainer.childNodes

	for (var l=0; l<children.length; l++) {
		if (children[l].classList.contains("border")) {
			children[l].childNodes[1].innerHTML = document.getElementById("newMessage").value;
		}
	}
	if (event.keyCode == 13) {
		newMessage.value = "";
	}
}



//END






