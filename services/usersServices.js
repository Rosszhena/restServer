const { v4: uuid } = require('uuid');
const User = require ('../database/modeldb');

const usuariosGet = () => {
    const allUsuarios = User.getAllUsuarios();
    return allUsuarios;
};



const usuariosPost = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid()
    };

    console.log('userTOINSERT', userToInsert);
   
    const createUser = User.createNewUser(userToInsert);
    return createUser;
};

const usuariosPut = (id, changes ) => {
    const usuarioPut = User.updateUser(id, changes );
    return usuarioPut;
};


const usuariosDelete = (id) => {
    User.deleteUser(id);
};


module.exports = {
    usuariosGet, 
    usuariosPost,
    usuariosPut,
    usuariosDelete
}