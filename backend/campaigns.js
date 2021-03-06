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

var campaigns = [
    {
        id: 1, name: "Fall 2015 Promo", status: "Active",
        description: "Fall 2015 Promo Desc",
        publisher: 'Google', keywords: "fall, clothing"
    },
    {
        id: 2, name: "Back to School", status: "Active",
        description: "Back to School 2015 Desc",
        publisher: 'Google', keywords: "back-to-school, clothing, backpacks"
    },
    {
        id: 3, name: "Thanksgiving", status: "Pending",
        description: "Thanksgiving 2015 Desc",
        publisher: 'Bing', keywords: "turkey, thanksgiving"
    },
    {
        id: 4, name: "Holiday 2015", status: "Pending",
        description: "Holiday 2015 Desc",
        publisher: 'Yahoo', keywords: "thanksgiving, halloween, christmas"
    },
    {
        id: 5, name: "End of Year 2015", status: "Pending",
        description: "End of Year 2015 Desc",
        publisher: 'Bing', keywords: "christmas, snow"
    },
    {
        id: 6, name: "Spring 2016", status: "Pending",
        description: "Spring 2016 Desc",
        publisher: 'Google', keywords: "spring, garden"
    },
    {
        id: 7, name: "Graduation 2016", status: "Pending",
        description: "Grad 2016 Promo Desc",
        publisher: 'Google', keywords: "diploma"
    }
];

router.get("/", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var result = {};
    result['campaign'] = campaigns;
    res.send(JSON.stringify(result));
});

router.post("/", function (req, res) {
    var name = req.body.campaign.name;
    var status = req.body.campaign.status;
    var description = req.body.campaign.description;

    var id = campaigns.length + 1;
    var campaign = {id: id, name: name, status: status, description: description};
    campaigns.push(campaign);

    var result = {};
    result['campaign'] = campaign;
    res.status(201).send(JSON.stringify(result));
});

router.get("/:campaignId", function (req, res) {
    var campaignId = parseInt(req.params.campaignId);

    var campaign =
        campaigns.find(function (campaign) {
            return campaign.id == campaignId;
        });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(campaign);
});

/*
 router.delete(function (req, res) {
 Campaign.remove({
 _id: req.params.campaign_id
 }, function (err, campaign) {
 if (err)
 res.send(err);

 res.json({message: 'Successfully deleted'});
 });
 });
 */

module.exports = router;