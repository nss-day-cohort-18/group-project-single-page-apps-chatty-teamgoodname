


// The Initial Chatty Object
var Chatty = (function(){
	var jsonMessages = [];
		return {
			getJsonMessages: function(){
				return jsonMessages;
			},
			setInitialMessages: function(messages){
				jsonMessages = messages;
			},
		};
})(Chatty || {});
