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




const usuariosPut = () => {
    return;
};
const usuariosDelete = () => {
    return;
};
const usuariosPatch = () => {
    return;
};

module.exports = {
    usuariosGet, 
    usuariosPost,
    usuariosPut,
    usuariosDelete
}