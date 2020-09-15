import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON

    response.json([
        'Danilo',
        'Maria',
        'Robson',
        'José',
        'Daniel',
        'Marta'
    ]);
});

app.listen(3333);