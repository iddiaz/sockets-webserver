const express = require('express');
const cors = require('cors');



class Server {

   constructor() {
      this.app = express();
      this.port =  process.env.PORT; 
      this.server = require('http').createServer(this.app);
      this.io = require('socket.io')(this.server);

      this.paths = {}
  

      //Middlewares
      this.middlewares();

      //Rutas
      this.routes();

      //sockets
      this.sockets();
   }
   

   middlewares(){
      //CORS
      this.app.use( cors() )

      //Directorio Público
      this.app.use( express.static('public') );

   }

   routes(){
      // this.app.use( this.paths.auth, require('../routes/auth'));

   }

   sockets(){

      this.io.on('connection', socket => {
         console.log('cliente conectado', socket.id);

         socket.on('disconnect', ()=>{
            console.log('cliente desconectado', socket.id);
         })

         socket.on('enviar-mensaje', ( payload )=>{
            console.log(payload);
         })


      });

   }

   listen(){
      this.server.listen( this.port, ()=>{
         console.log('servidor corriendo en ', this.port );
      })
   }

}

module.exports = Server;