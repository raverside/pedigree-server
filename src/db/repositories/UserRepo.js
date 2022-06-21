const {users} = require('../models');

class UserRepo {

    async getUserById(id) {
        if (!id) return false;
        return await users.findOne({ where: {id} });
    }

    async getUserByCredentials(username, password) {
        return await users.findOne({ where: {password, username} });
    }
}

module.exports = new UserRepo();
