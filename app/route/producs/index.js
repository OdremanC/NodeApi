//importamos los metodos
const methods = require('./methods');

// generamos nuestros endpoints
module.exports = function(app){
	// definimos el endpoint y pasamos el metodo que se ocupara en este caso
	app.get('/products/all', methods.list);
	//app.post('/products/create', methods.create);
	//app.get('/stock/:id',methods.findById);
	//app.delete('/stock/delete/:id',methods.delete);
	//app.put('/stock/update/:id',methods.update);
}