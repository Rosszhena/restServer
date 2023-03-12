const { Router } = require('express');

const {   usuariosGet,
          usuariosPut, 
          usuariosPost, 
          usuariosDelete, 
          } =require('../controllers/usuarios.controllers');

const router = Router();

  router
  .get('/', usuariosGet )
  .put('/:id', usuariosPut )
  .post('/', usuariosPost )
  .delete('/:id', usuariosDelete );


  module.exports = router;