import Ember from "ember";

export default Ember.Route.extend({
    model() {
        var user1 = this.store.createRecord('user', {"firstName": "Frodo", "lastName": "Baggins", "score" : 56});
        var user2 = this.store.createRecord('user', {"firstName": "Bilbo", "lastName": "Baggins", "score" : 33});

        return [user1, user2];
    }
});