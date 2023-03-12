const { v4: uuid } =require('uuid');
const Modeldb = require ('../database/modeldb');

const usuariosGet = () => {
    const allUsuarios = Modeldb.getAllUsuarios();
    return allUsuarios;
};


const usuariosPost = () => {
    return;
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
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}