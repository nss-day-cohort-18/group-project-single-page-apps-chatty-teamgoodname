
var Chatty = (function(oldChatty){

	
	oldChatty.populateDOM = function(index, name, txt, time){
		var newElement = createMessageElement(index, name, txt, time);
		document.getElementById("messageBoard").appendChild(newElement);
	};

	oldChatty.deleteOneMessageFromDOM = function (event){
		var idIndex = ((event.target.id).substring(8, 9)).toString();
		var messageToDelete = document.getElementById("message--" + idIndex);
		messageToDelete.parentNode.removeChild(messageToDelete);
	}
	return oldChatty;
})(Chatty || {});