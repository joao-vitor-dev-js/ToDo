//requisitar express
const express = require('express');
const router = express.Router();

//criando a requisição e a rotas
const TaskController = require('../controller/TaskContoller');
//requerindo validação das tarefas
const TaskValidation = require('../middlewares/TaskValidation');


//rotas da API
router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);


//exportando as rotas para index
module.exports = router;