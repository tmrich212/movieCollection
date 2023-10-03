import express from 'express';
import { PORT } from './config';

const app = express();


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Listening on port 5555 :)')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})