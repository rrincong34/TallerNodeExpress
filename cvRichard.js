const express = require('express'),
    app = express(),
   path = require('path');
 
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

    
app.use(express.static(path.join(__dirname, "/public")));

app.use(cookieParser());
app.use(cookieSession({ secret: "I'm a secret" }));


app.get('/', (peticion, respuesta)=>{


 peticion.session.visitas || (peticion.session.visitas = 0);
    let n = peticion.session.visitas++;
        console.log(`Visita # ${n}`);

    respuesta.sendFile(`${__dirname}/views/index.html`);
});

app.get('/acerca', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/acerca.html`);
});

app.get('/experiencia', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/experiencia.html`);
});

app.get('/educacion', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/educacion.html`);
});

app.get('/idiomas', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/idiomas.html`);
});

app.get('/aptitudes', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
});


app.listen(8080);
console.log("bienvenido");
