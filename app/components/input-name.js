import Ember from "ember";

export default Ember.Component.extend({
    tagName: '', // don't create a tag for this component
    actions: {
        submit(newTitle) {
            if (newTitle) {
                this.sendAction('action', newTitle);
            }
            this.set('newTitle', '');
        }
    }
});