var newMessage = document.getElementById("newMessage");
var addMessageButton = document.getElementById("addMessageButton");

addMessageButton.addEventListener("click", function() {
	console.log("Hi");
});

newMessage.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("addMessageButton").click();
    }
});

//Event Listener for clearButton - Deactivate clearButton when message list is empty
var clearButton = document.getElementById("clearButton");

clearButton[0].setAttribute("disabled", true);

clearButton.addEventListener("click", function() {

});