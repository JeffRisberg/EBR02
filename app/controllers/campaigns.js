import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        createCampaign() {
            var name = this.get("name");
            var description = this.get("description");

            const campaign = this.get('store').createRecord('campaign', {
                name: name,
                description: description,
                status: "Enabled"
            });
            campaign.save();
        }
    }
});