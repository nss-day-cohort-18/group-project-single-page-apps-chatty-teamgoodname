var Chatty = (function(oldChatty){

	var messageContainer = document.getElementById("messageBoard");
	var userMessages = [];

	oldChatty.addMessageToDOM = function(index, name, txt, time){
		var newElement = createMessageElement(index, name, txt, time);
		document.getElementById("messageBoard").appendChild(newElement);
	};

	oldChatty.addMessageToArray = function(id, nameOf, messageText, time){
		var messages = oldChatty.getJsonMessages();
		var newMessageObject = {
			message: messageText,
			name: nameOf,
			time: time,
			id: id
		}
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
