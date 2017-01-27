console.log("111111111111");

var request = new XMLHttpRequest();

request.addEventListener("load", requestCompleted);

request.open("GET", "chatty.json");
request.send();

// The Initial Chatty Object
var Chatty = (function(){
	var jsonMessages = [];
		return {
			getMessages: function(){
				return jsonMessages;
			},
			setInitialMessages: function(messages){
				jsonMessages = messages;
			},
			addMessageObject: function(message){
				jsonMessages.push(message);
			}
		};
})(Chatty || {});


// Event handler for when JSON file is loaded
function requestCompleted(event){
	console.log("REQUEST COMPLETE");
	var tempJsonMessages = JSON.parse(event.target.responseText);
	// Load the JSON messages into the Chatty oject
	Chatty.setInitialMessages(tempJsonMessages);
	// Populate the DOM (function in main.js)
	populateInitialMessages();
};

// Populate messages is called, but we can't createMessageElement until page2 is loaded
function populateInitialMessages(){
	var messages = Chatty.getMessages();

	messageContainer.innerHTML = "";

	console.log("About to Populate Messages into DOM:\n", messages);

	for(var i = 0 ; i < messages.length; i++){
		var newMessageId = "message--" + i.toString();
		var newButtonId = "button--" + i.toString();

		// Calls Chatty method to create a new <div> element that contains the formatted message
		var newMessage = createMessageElement(i, messages[i].name, messages[i].message, messages[i].time);

		messageContainer.appendChild(newMessage);
	};
	console.log("DOM Populated");
};