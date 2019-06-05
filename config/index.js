// todas las configuraciones del proyecto
module.exports = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8081,
	ip: process.env.IP || '0.0.0.0',
	cors: process.env.CORS || true
};