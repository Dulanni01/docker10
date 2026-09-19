const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hola desde Docker');
});

app.get('/health',(req,res)=>{
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});