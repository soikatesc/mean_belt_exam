var Users = require('../controllers/users')


module.exports = function(app){
	//users route
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.post('/sessions', Users.login)
	app.get('/users/:id', Users.show)
	app.delete('/users/:id', Users.destroy)
	app.put('/users/:id', Users.update)
}