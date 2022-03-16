// requisitando a base de dados
const mongoose = require('../config/database');
const Schema = mongoose.Schema;

// criando campos da tabela de dados
const TaskSchema = new Schema({
  macaddress: {type: String, required: true},
  type: {type: Number, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  when: {type: Date, required: true}, //mongo guarda data e hora juntos
  done: {type: Boolean, default: false},
  created: {type: Date, default: Date.now()} // a data de criação vai ser incluida
});

//exportando os modelos do shema
module.exports = mongoose.model('Task', TaskSchema);
