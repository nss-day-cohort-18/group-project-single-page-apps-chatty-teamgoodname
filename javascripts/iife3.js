
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

	oldChatty.readMessage = function(event) {
		var idIndex = ((event.target.id).substring(6, 7)).toString();
		var messageToRead = document.getElementById("message--" + idIndex);
		var x = messageToRead.childNodes[1].childNodes[0].nodeValue;
		console.log(event.target.id);
		responsiveVoice.speak(x, "UK English Male", {rate: 0.8});
	} 

	return oldChatty;
})(Chatty || {});