const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    //userExist tomara como true o false si es que l usuario existe en la sala
    const userExist = users.find((user) => user.room === room && user.name === name);

    if(userExist){
        return {error: "el usuario existe"}
    }

    const user = {id, name, room};
    users.push(user);

    return {user:user}
}

const removeUser = (id) => {
    //findeIndex devuelve la posición, si no lo encuentra devolvera -1
    const index = user.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1);
    }
}

const getUser = (id) => {
    const userFound = users.find((user) => user.id === id );
    return userFound;
}

const getUsersInRoom = (room) => {
    const usersList = users.filter((user) => user.room === room);
    return usersList;
}

module.exports = {addUser, removeUser, getUser, getUsersInRoom};