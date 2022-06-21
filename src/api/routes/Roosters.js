const express = require('../express');
const routeHandler = require('../routeHandler');
const RoosterRepo = require('../../db/repositories/RoosterRepo');

express.post('/syncRoosters', routeHandler(async (request, response) => {
    const {roosters} = request.body;
    await RoosterRepo.upsertRoosters(roosters);

    response.status(200);
    response.json({success: true});
}));

express.get('/fetchRoosters', routeHandler(async (request, response) => {
    const roosters = await RoosterRepo.getAllRoosters();

    response.status(200);
    response.json({roosters});
}, {enforceLogin: false}));
