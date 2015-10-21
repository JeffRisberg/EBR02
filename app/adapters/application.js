//import LFAdapter from 'ember-localforage-adapter/adapters/localforage';

//export default LFAdapter;

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:3000',

    shouldReloadAll() { return false; }
});