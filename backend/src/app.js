const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

//app.listen(3333);

/* 
rota/recurso
*/
/* 
GET: buscar informação no back-end
POST: criar informação no back-end
PUT: alterar informação no back-end
*/ 
/* 
query params: parametros nomeados enviados na rota apos ?
servem para filtros/paginação
route params: utilizados para identificar recursos
request body: corpo da requisição
*/