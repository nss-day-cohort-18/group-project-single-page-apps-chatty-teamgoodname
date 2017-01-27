// One IIFE should contain a function that accepts an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.

console.log("2222222222222222");

var Chatty = (function(oldChatty){

			
			oldChatty.deleteOneMessage = function(messageId){
				console.log("Delete Message");
			};

			oldChatty.addMessage = function(id, nameOf, messageText, time){
				var messages = oldChatty.getMessages();
				var newElement = createMessageElement(id, nameOf, messageText, time);
				document.getElementById("messageBoard").appendChild(newElement);
				oldChatty.addMessageObject({
					message: messageText,
					name: nameOf,
					time: time
				})
				console.log("Array: ", oldChatty.getMessages());
			};




		return oldChatty;

})(Chatty || {});