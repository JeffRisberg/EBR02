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
    {id: 1, name: "Fall 2015 Promo", status: "Active", description: "Fall 2015 Promo Desc"},
    {id: 2, name: "Back to School", status: "Active", description: "Back to School 2015 Desc"},
    {id: 3, name: "Thanksgiving", status: "Pending", description: "Thanksgiving 2015 Desc"},
    {id: 4, name: "Holiday 2015", status: "Pending", description: "Holiday 2015 Desc"},
    {id: 5, name: "End of Year 2015", status: "Pending", description: "End of Year 2015 Desc"},
    {id: 6, name: "Spring 2016", status: "Pending", description: "Spring 2016 Desc"},
    {id: 7, name: "Graduation 2016", status: "Pending", description: "Grad 2016 Promo Desc"}
];

router.get("/", function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(campaigns));
});

router.get("/:campaignId", function (req, res) {
    var campaignId = parseInt(req.params.campaignId);

    var campaign =
        campaigns.find(function (campaign) {
            return campaign.id == campaignId;
        });

    res.json(campaign);
    //Campaign.findById(req.params.campaign_id, function (err, campaign) {
    //    if (err)
    //        res.send(err);
    //    res.json(campaign);
    //});
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