app.controller('ChatsController', function(ChatFactory, $scope, $cookies){
	console.log('Initializing ChatController...')

	var self = this
	self.msgs = []


	self.sendMsg = function(msg, user){
		msg.user = user.username
		ChatFactory.emit('send msg', msg)
		msg.text = ''
	}

	ChatFactory.on('get msg', function(data){
		self.msgs.push(data)
		$scope.$digest()
	})
	
})