const TaskModel = require('../model/TaskModel');

const {isPast} = require('date-fns');

const TaskValidation = async (req, res, next) =>{

  const {macaddress, title, type, description, when} = req.body; //ver se existe os tipos no body

  if(!macaddress) //mensagens de validação 
  return res.status(400).json({error: 'macaddress é obrigatorio'});
  else if(!type)
  return res.status(400).json({error: 'type é obrigatorio'});
  else if(!title)
  return res.status(400).json({error: 'titulo é obrigatorio'});
  else if(!description)
  return res.status(400).json({error: 'descrição é obrigatorio'});
  else if(!when)
  return res.status(400).json({error: 'Data e Hora é obrigatorio'});
  else{
    let exists;

    if(req.params.id){ //validar se o id é usado
      exists = await TaskModel.findOne
      ({'_id': {'$ne': req.params.id}, //se not exists id
        'when': {'$eq': new Date(when)}, 
        'macaddress': {'$in': macaddress}});
    }else{
      if(isPast(new Date(when)))
        return res.status(400).json({error: 'escolha uma data e hora futura'});
    exists = await TaskModel.findOne //validar se já existe data e endereço
    ({'when': {'$eq': new Date(when)}, 
    'macaddress': {'$in': macaddress}});
    }

    if(exists){ //se já existe mandar erro
      return res.status(400).json({error: 'já existe uma data e horario'});
    }

    next();
  }

}

module.exports = TaskValidation;