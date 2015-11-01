var express = require('express');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    var campaigns = require('./campaigns');
    var tasks = require('./tasks');

    app.use("/campaigns", campaigns);
    app.use("/tasks", tasks);
};