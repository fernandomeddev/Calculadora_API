//Framework hapi.js
const cors = require('cors')
const Hapi = require('hapi');


// testeee


// Máquina e Porto Lógico

const host = 'localhost';

const port = 3000; 

// Criação do Servidor

const server = Hapi.Server({

    host: host,

    port: port

});

// Iniciar servidor
const checkOrigin = (origin) => {
    if(origin === 'http://localhost:3000'){
        return true
    }else{
        return false
    }
}

const init = async () => { 
  
    try {
        await server.register({
            plugin: require('hapi-cors'),
            options: {
                checkOrigin: checkOrigin
            }
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    await server.start();

    console.log("Server up no porto: " + port);

}

//Definir routes
require('./routes/routes')(server);

//Inicialização da App

init()


//Framework hapi.js const Hapi = require('hapi'); // Máquina e Porto Lógico const host = 'localhost'; const port = 3000; // Criação do Servidor const server = Hapi.Server({ host: host, port: port }); // Iniciar servidor const init = async () => { await server.start(); console.log("Server up no porto: " + port); } //Inicialização da App init();