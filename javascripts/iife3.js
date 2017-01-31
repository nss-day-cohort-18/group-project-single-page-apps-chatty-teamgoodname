
var Chatty = (function(oldChatty){

	
	oldChatty.deleteOneMessageFromDOM = function (event){
		var idIndex = ((event.target.id).substring(8, 9)).toString();
		var messageToDelete = document.getElementById("message--" + idIndex);
		messageToDelete.parentNode.removeChild(messageToDelete);
	}

	oldChatty.readMessage = function(event) {
		var idIndex = ((event.target.id).substring(6, 7)).toString();
		var messageToRead = document.getElementById("message--" + idIndex);
		var x = messageToRead.childNodes[0].childNodes[0].nodeValue;
		var y = x + messageToRead.childNodes[1].childNodes[0].nodeValue;
		console.log(event.target.id);
		responsiveVoice.speak(y, "UK English Male", {rate: 0.8});
	}

	oldChatty.deleteOneMessageFromArray = function(event){
		var userMessages = Chatty.getCurrentMessages();
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

	return oldChatty;
})(Chatty || {});