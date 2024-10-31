const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const dbConfig = require('./config');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected!');
});

const routes = require('./routes')(connection);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
