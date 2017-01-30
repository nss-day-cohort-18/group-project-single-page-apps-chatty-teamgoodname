
var request = new XMLHttpRequest();

request.addEventListener("load", requestCompleted);

request.open("GET", "chatty.json");
request.send();

// The Initial Chatty Object
var Chatty = (function(){
	var jsonMessages = [];
		return {
			getJsonMessages: function(){
				return jsonMessages;
			},
			setInitialMessages: function(messages){
				jsonMessages = messages;
			},
		};
})(Chatty || {});


// Event handler for when JSON file is loaded
function requestCompleted(event){
	var tempJsonMessages = JSON.parse(event.target.responseText);
	// Load the JSON messages into the Chatty oject
	Chatty.setInitialMessages(tempJsonMessages);

	// Load JsonMessages into userMessages
	Chatty.passJsonMessages();

	// Populate the DOM (function in main.js)
	populateInitialMessages();
};

// Populate messages is called, but we can't createMessageElement until page2 is loaded
function populateInitialMessages(){
	var messages = Chatty.getJsonMessages();

	messageContainer.innerHTML = "";

	console.log("About to Populate Messages into DOM:\n", messages);

	for(var i = 0 ; i < messages.length; i++){
		var newMessageId = "message--" + i.toString();
		var newButtonId = "button--" + i.toString();

		// Calls Chatty method to create a new <div> element that contains the formatted message
		var newMessage = createMessageElement(i, messages[i].name, messages[i].message, messages[i].time);

		messageContainer.appendChild(newMessage);

		document.getElementById("delete--" + i).addEventListener("click", Chatty.deleteOneMessage);
	};
	console.log("DOM Populated");
};