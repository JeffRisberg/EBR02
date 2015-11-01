import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        createTask(name) {
            const task = this.get('store').createRecord('task', {
                name,
                isDone: false
            });
            task.save();
        },
        toggleIsDone(task) {
            task.toggleProperty('isDone');
            task.save();
        }
    }
});