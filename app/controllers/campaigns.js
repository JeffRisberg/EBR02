import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        createCampaign(name) {
            console.log(name);
            var description = "";//model.get("description");
            const campaign = this.get('store').createRecord('campaign', {
                name: name,
                description: description,
                status: "Enabled"
            });
            campaign.save();
        }
    }
});