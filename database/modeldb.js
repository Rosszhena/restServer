const DB = require('./db.json'); //
const { saveToDatabase } = require('./utils');

const getAllUsuarios = () => {
    return DB.users;
};

const createNewUser = ( newUser ) => {
    const isAlreadyAdded = 
        DB.users.findIndex(( user ) => user.name === newUser.name) > -1;

    if(isAlreadyAdded) {
        return;
}

DB.users.push(newUser);
saveToDatabase(DB);
return newUser;
};

const updateUser = ( userId, changes ) => {

    const isAlreadyAdded = 
    DB.users.findIndex((user) => user.name === changes.name) > -1;
console.log('USESRID', userId);
    if(isAlreadyAdded) {
        return;
}
    const indexForUpdate = DB.users.findIndex(
        (user) => (user.id = userId)
    );

    if(indexForUpdate === -1 ){
        return;
    }

    const actualizaUsuario = {
        ...DB.users[indexForUpdate],
        ...changes
    };

    DB.users[indexForUpdate] = updateUser;
    saveToDatabase(DB);
    return actualizaUsuario;
    
};


module.exports = { getAllUsuarios, createNewUser, updateUser  };