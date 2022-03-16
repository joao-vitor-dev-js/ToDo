// requerindo mongoose
const mongoose = require('mongoose');
// linha de conexao do mongo
const url = 'mongodb://localhost:27017/todo';
// conexao com outras bases
mongoose.connect(url, {useNewUrlParser: true});
// exportação da base de dados
module.exports = mongoose;
