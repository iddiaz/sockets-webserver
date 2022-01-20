const express = require('express');
const cors = require('cors');



class Server {

   constructor() {
      this.app = express();
      this.port =  process.env.PORT; 

      this.paths = {}
  

      //Middlewares
      this.middlewares();

      //Rutas
      this.routes();
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

   listen(){
      this.app.listen( this.port, ()=>{
         console.log('servidor corriendo en ', this.port );
      })
   }

}

module.exports = Server;