const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'brxsw7xlmpeukrblp4fm-mysql.services.clever-cloud.com',
  user: 'uiwfbbptsx8tsa6n',
  password: 'dwWUo6d89iEetKMfYMoL',
  database: 'brxsw7xlmpeukrblp4fm'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos de Clover Cloud');
});

module.exports = connection;
