var express = require('express')
var bp = require('body-parser')
var passport = require('passport')

var app = express()
var path = require('path')


app.use(express.static(__dirname + '/client'))
app.use(express.static(__dirname + '/bower_components'))
app.use(bp.json())

//connecting to mongoose
require('./server/config/mongoose')

//setup routes
require('./server/config/routes')(app)


var server = app.listen(8000, function(){
	console.log('listening to port 8000....')
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
	console.log('working')
	console.log(socket.id)
	socket.on('send msg', function(data){
		console.log(data)
		io.emit('get msg', {data:data, socket_id: socket.id})
	})
})