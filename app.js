const morgan = require ('morgan');
const mongoose = require ('mongoose');
const path = require ('path');
const express = require ('express');
const app = express();
// configuraciones iniciales
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
/* conexion a la base de datos mongodb */

mongoose.connect('mongodb://localhost/crud-mongo')
.then(db=>console.log('conectado'))
.catch(err=> console.log(err));

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//importando las rutas
const indexesRoutes = require('./routes/index');
//usando las rutas
app.use('/',indexesRoutes);
app.use(express.static(path.join(__dirname,'public')));

//iniciando el servidor

app.listen(app.get('port'),()=>{
console.log('server on port '+app.get('port'));
});