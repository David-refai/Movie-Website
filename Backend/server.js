import express from 'express';
import data from './data.js'
const app = express();

app.get('/api/movies', (req , res) =>{
    res.send(data.movies)
})

app.get('/', (req, res) =>{
    res.send('Server is ready');
    
});
app.listen(5000, () =>{
    console.log('Server at http://localhost:5000');
});