// One IIFE should contain a function that accepts an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.
var Chatty = (function(oldChatty){


	var messageContainer = document.getElementById("messageBoard");
	var userMessages = [];

	oldChatty.deleteOneMessageFromArray = function(event){
		console.log("User Msgs: ", userMessages);


		for(var i = 0; i < userMessages.length; i++){
			if(("delete--" + userMessages[i].id).toString() == event.target.id){
				console.log("Msg[i]: ", userMessages[i]);
				userMessages.splice(i, 1);
				console.log("NEW: ", userMessages);
			}
		}

		// Reset ids in the array
		for(var i = 0; i < userMessages.length; i++){
			userMessages[i].id = i;
		}
	};
	oldChatty.addMessage = function(id, nameOf, messageText, time){
		var messages = oldChatty.getJsonMessages();
		// var newElement = createMessageElement(id, nameOf, messageText, time);
		var newMessageObject = {
			message: messageText,
			name: nameOf,
			time: time,
			id: id
		}
		// document.getElementById("messageBoard").appendChild(newElement);
		userMessages.push(newMessageObject);
	};
	oldChatty.passJsonMessages = function(){
		userMessages = oldChatty.getJsonMessages();
	};
	oldChatty.getCurrentMessages = function(){
		return userMessages;
	}

	return oldChatty;
})(Chatty || {});