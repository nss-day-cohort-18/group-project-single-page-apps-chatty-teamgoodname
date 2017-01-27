var request = new XMLHttpRequest();

request.addEventListener("load", requestCompleted);

request.open("GET", "chatty.json");
request.send();

// The Initial Chatty Object
var Chatty = (function(Chatty){
	var jsonMessages = [];
		return {
			getMessages: function(){
				return jsonMessages;
			},
			loadInitialMessages: function(messages){
				jsonMessages = messages;
			}
		};
})(Chatty || {});


// Event handler for when JSON file is loaded
function requestCompleted(event){
	var tempJsonMessages = JSON.parse(event.target.responseText);
	// Load the JSON messages into the Chatty oject
	Chatty.loadInitialMessages(tempJsonMessages);
	// Populate the DOM
	populateMessages();
};

// Calls the Chatty method, getMessages(), and puts the returned array
// 	of message objects into the HTML container 
function populateMessages(){
	var messageContainer = document.getElementById("messageBoard");
	var messages = Chatty.getMessages();

	messageContainer,innerHTML = "";

	console.log("About to Populate Messages into DOM:\n", messages);

	for(var i = 0 ; i < messages.length; i++){
		var newMessageId = "message--" + i.toString();
		var newButtonId = "button--" + i.toString();

		console.log("Objects: ", messages[i].message);
		console.log("Name: ", messages[i].name);

		// messageContainer.innerHTML += 	`<div class="col-sm-12" id=${newMessageId}>
		// 									<strong><p>${messages[i].name}</p></strong>
		// 									<span><p> -->  ${messages[i].message}</p></span>
		// 									<input type="button" value="Delete" id=${newButtonId}></input>
		// 								 </div>
		// 								`;
	};
	console.log("DOM Populated");
};

function createMessageElement(messageIdNumber, nameOfPerson, messageText, timeSent){
	// Create <div> element to hold each message
	var messageElement = document.createElement("DIV");
	messageElement.id = "message--" + messageIdNumber;

	// Create paragraph element to hold message sender's name
	var nameElement = document.createElement("P");

	// Create paragraph element to hold the message content
	var messageTextElement = document.createElement("P");

	// Create paragraph element to hold the time that the message is sent
	var timeElement = document.createElement("P");

	// Create delete button
	var deleteButtonElement = document.createElement("BUTTON");
	deleteButtonElement.id = "delete--" + messageIdNumber;






}