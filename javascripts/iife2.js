// One IIFE should contain a function that accepts an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. 
// Each message should be stored in a private array in this IIFE. 
// This IIFE should also expose a function to read all messages, and delete a single message.

console.log("2222222222222222");

var Chatty = (function(oldChatty){

	var userMessages = [];
	var messageContainer = document.getElementById("messageBoard");


	oldChatty.deleteOneMessage = function(event){
		console.log("Event Id: ", event.target.id);

		for(var i = 0; i < userMessages.length; i++){
			if("delete--" + userMessages[i].id == event.target.id){
				userMessages.splice(i, 1);
				var divToDelete = document.getElementById("message--" + i);
				divToDelete.parentNode.removeChild(divToDelete);
				console.log("NEW: ", userMessages);
			}
		}

		// Reset ids in the array
		// Not sure if it works yet
		for(var i = 0; i < userMessages.length; i++){
			userMessages[i].id = i;
		}


		// Reset IDs in the DOM
		// Doesnt work yet
		var children = messageContainer.childNodes;
		for(var i = 0; i < children.length; i++){
			var childOfChild = children[i].childNodes;
			console.log("ChildOfChild: ", childOfChild);

			children[i].id = "message--" + i;
			childOfChild[3].id = "delete--" + i;
		}

	};
	oldChatty.addMessage = function(id, nameOf, messageText, time){
		var messages = oldChatty.getJsonMessages();
		var newElement = createMessageElement(id, nameOf, messageText, time);
		var newMessageObject = {
			message: messageText,
			name: nameOf,
			time: time,
			id: id
		}
		document.getElementById("messageBoard").appendChild(newElement);
		userMessages.push(newMessageObject);
	};
	oldChatty.getUserMessages = function(){
		userMessages = oldChatty.getJsonMessages();
	}
	return oldChatty;
})(Chatty || {});

console.log("AFTER2: ",Chatty);