app.factory('ChatFactory', function(){
	var socket = io.connect('http://localhost:8000')

	return socket
})

