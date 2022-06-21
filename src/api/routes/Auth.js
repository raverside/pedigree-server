const express = require('../express');
const routeHandler = require('../routeHandler');
const UserRepo = require('../../db/repositories/UserRepo');
const AuthService = require('../../services/AuthService');

express.post('/login', routeHandler(async (request, response) => {
    const {username, password} = request.body;
    const user = await UserRepo.getUserByCredentials(username, password);
    //@TODO^ use comparePassword() from AuthService later and hash the password

    if (user) {
        const token = await AuthService.getToken(user.id);
        response.status(200);
        response.json({user, token});
    } else {
        response.status(403);
        response.json({error: "error_auth"});
    }
}, {enforceLogin: false}));

express.get('/tokenLogin', routeHandler(async (request, response) => {
    const token = request.headers.authorization;
    const userId = AuthService.decodeToken(token).id;
    const user = await UserRepo.getUserById(userId);

    if (user) {
        response.status(200);
        response.json({user});
    } else {
        response.status(403);
        response.json({error: "error_token_expired"});
    }
}, {enforceLogin: false}));
