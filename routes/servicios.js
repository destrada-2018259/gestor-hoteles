const {Router} = require('express');

const {getServicio, postServicio, putServicio,deleteServicio} = require('../controllers/servicio');

const router = Router();

router.get('/mostrar', getServicio);
router.post('/crear', postServicio);
router.put('/editar:id', putServicio);
router.delete('/eliminar/:id', deleteServicio); 

module.exports = router;