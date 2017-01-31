// One IIFE should contain a function that accepts an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.
var Chatty = (function(oldChatty){

	var messageContainer = document.getElementById("messageBoard");
	var userMessages = [];

	oldChatty.addMessageToDOM = function(index, name, txt, time){
		var newElement = createMessageElement(index, name, txt, time);
		document.getElementById("messageBoard").appendChild(newElement);
	};

	oldChatty.addMessageToArray = function(id, nameOf, messageText, time){
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
	};
	return oldChatty;
})(Chatty || {});
