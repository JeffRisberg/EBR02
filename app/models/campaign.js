import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    status: DS.attr('string'),
    description: DS.attr('string'),
    publisher: DS.attr('string'),
    keywords: DS.attr('string')
});