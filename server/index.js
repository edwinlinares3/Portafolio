const express = require ('express');
const morgan = require ('morgan');
const app = express();
const {Mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Starting the server - iniciando el servidor
app.listen(app.get('port'),() => {
    console.log('Serve on port', app.get ('port'));

});