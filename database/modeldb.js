const DB = require('./db.json'); //
const { saveToDatabase } = require('./utils');

const getAllUsuarios = () => {
    return DB.users;
};

const createNewUser = ( newUser ) => {
    const isAlreadyAdded = DB.users.findIndex( (user ) => user.name === newUser.name);

    if(isAlreadyAdded) {
        return;
}

DB.users.push(newUser);
saveToDatabase(DB);
};


module.exports = { getAllUsuarios, createNewUser };