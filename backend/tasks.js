var express = require('express');

var router = express.Router();

if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

var tasks = [
    {id: 1, name: "Walk the dog", idDone: false},
    {id: 2, name: "Wash dishes", idDone: false}
];

router.get("/", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var result = {};
    result['task'] = tasks;
    res.send(JSON.stringify(result));
});

router.post("/", function (req, res) {
    var name = req.body.task.name;

    var id = tasks.length + 1;
    var task = {id: id, name: name};
    tasks.push(task);

    var result = {};
    result['task'] = task;
    res.status(201).send(JSON.stringify(result));
});

router.get("/:taskId", function (req, res) {
    var taskId = parseInt(req.params.taskId);

    var task =
        tasks.find(function (task) {
            return task.id == taskId;
        });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(task);
});

module.exports = router;