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
        'Marta',
        'Roberto'
    ]);
});

app.listen(3333);