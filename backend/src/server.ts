import express from 'express';

import './database/connection';
const app = express();
app.use(express.json());
// Rota = conjunto
// recurso = usuario
// metodos HTTP = GET, POST, PUT, DELETE   
// parametros

//GET = PEGAR INFORMAÇÃO (lista, item)
// POST = CRIANDO UMA INFORMAÇÃO
// PUT = EDITANDO UMA INFORMAÇÃO


// Parametros
// Query params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar  um recurso)
// Body: Passar dados mais robustos: Dados de um formulárioo de cadastro.


app.post('/users/:id', (request, response) =>{
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);



    return response.json({message: 'Hello World'})
});


app.listen(3333)

// Driver nativo, Query builder, ORM     