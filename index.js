import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/userRoutes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.get('/', (req, res) => {
    res.status(200).send('you are welcome to Teamwork application')
})
app.use('/api/v1', userRoutes);
app.use('*', (req, res) => {
    res.status(405).send('route not found');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})

export default app;