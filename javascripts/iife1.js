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
