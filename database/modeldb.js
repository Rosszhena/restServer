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


module.exports = { getAllUsuarios, createNewUser };