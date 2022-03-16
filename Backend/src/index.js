// requisitando expresss
const express = require("express");
const cors = require("cors");
const server = express();
//iniciando o servidor
server.use(cors());
server.use(express.json());

//usando o exports do routes(rotas)
const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);


// porta do servidor 
server.listen(3333, ()=>{
  console.log("API ONLINE");
});