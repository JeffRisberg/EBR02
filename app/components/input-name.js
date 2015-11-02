import Ember from "ember";

export default Ember.Component.extend({
    tagName: '', // don't create a tag for this component
    actions: {
        submit(name) {
            if (name) {
                this.sendAction('action', name);
            }
            this.set('value', '');
        }
    }
});