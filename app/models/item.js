import DS from 'ember-data';

export default DS.Model.extend({
    task: DS.attr('string'),
    isDone: DS.attr('boolean')
});