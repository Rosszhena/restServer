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

  const { 
    body,
    params: { id },
   } = req;

   if (!id) {
     return;
   }
  
  const updateUser = usersServices.usuariosPut( id, body );
  res.send({ status: 'Ok', data: updateUser });

}

const usuariosDelete = (req, res) => {
    const {
      params: { id },
    } = req;

    if( !id ) {
      return;
    }

    usersServices.usuariosDelete(id);
    res.status(204).send({ status: 'OK' });
  };



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}