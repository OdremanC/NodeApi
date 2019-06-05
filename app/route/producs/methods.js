//requerimos la conexion a postgres
const pool = require( '../../../config/pgsql');

//get todos los registros
exports.list = function(req, res){
	try{

		let query = '';
	
		query += 'SELECT P.id,P.name, P.description, C.name as Category, S.name as SubCategory, '; 
		query += 'PT.name as Presentation, UM.name as UnidadDeMedida, PT.quantity, CC.cycle ';
		query +=  'FROM products as P ';
		query += 'LEFT JOIN categories AS C on P.category_id = C.id ';
		query += 'LEFT JOIN sub_categories AS S on P.sub_category_id = S.id ';
		query += 'LEFT JOIN presentation_type AS PT on presentation_id = PT.id ';
		query += 'LEFT JOIN unit_of_measurement as UM on PT.unit_of_measurement_id = UM.id ';
		query += 'LEFT JOIN cycle_count as CC on P.cycle_id = CC.id ';

  	pool.query( query , ( error, results ) => {
	  	
	  	if (error) {
  			throw error
  		}

  		console.log( results.rows )
  		res.status(200).json(results.rows);
  	});

	}catch( err ){
		console.log( err )
	}
}