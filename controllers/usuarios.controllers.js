const { response, request } = require('express');
const usersServices = require ('../services/usersServices');

const usuariosGet = (req, res = response ) => {
  const allUsers = usersServices.usuariosGet();
  res.send( { status: 'OK', data: allUsers });
}

const usuariosPost = (req, res) => {
  const { body } = req;
  if(
    !body.name ||
    !body.edad 
  )
  {
    return;
  }

  const newUser = {
    name: body.name,
    edad: body.edad
  };
  console.log('user', newUser);

  const createUsers = usersServices.usuariosPost(newUser);  
  res.status(201).send({ status: 'OK', data: createUsers });
}

const usuariosPut = (req, res) => {
  const updateUsers = usersServices.usuariosPut(req.params.id);
  res.send(`PUT API - controlador ${req.params.id}`);
}

const usuariosDelete = (req, res) => {
  const deleteUsers = usersServices.usuariosDelete(req.params.id);
  res.send(`DELETE API - controlador ${req.params.id}`);
  }



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
   
}