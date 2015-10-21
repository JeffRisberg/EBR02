import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        createCampaign(name) {
            const campaign = this.get('store').createRecord('campaign', {
                name,
                status: "Enabled",
                description: "description"
            });
            console.log("about to save");
            campaign.save();
            console.log("done saving");
        }
    }
});