// requerimos el plugin de pgsql
const Pool = require('pg').Pool

// instanciamos la conexion con postgres
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventory',
  password: 'postgres',
  port: 5432,
})

module.exports = pool;