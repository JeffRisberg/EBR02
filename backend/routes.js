var express = require('express');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    var campaign = require('./campaigns');

    app.use("/campaigns", campaign);
};