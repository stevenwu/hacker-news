import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeHasMany: function(type, hash, relationship) {
    // var key = relationship.key;
    // if (typeof hash[key] === 'object' && !Ember.isArray(hash[key])) {
      // hash[key] = Ember.keys(hash[key]);
    // }
    //We need to account for Firebase turning key/value pairs with ids '1' and '0' into arrays
    //See https://github.com/firebase/emberfire/issues/124
    // else if (Ember.isArray(hash[key]) && hash[key].length < 3 && (hash[key][0] === true || hash[key][1] === true)) {
      // this._normalizeNumberIDs(hash, key);
    // }
    // else if (Ember.isArray(hash[key])) {
      // throw new Error(fmt('%@ relationship %@(\'%@\') must be a key/value map in Firebase. Example: { "%@": { "%@_id": true } }', [type.toString(), relationship.kind, relationship.type.typeKey, key, relationship.type.typeKey]));
    // }
  },
  normalizeBelongsTo: function(type, hash, relationship) {
  }
});
