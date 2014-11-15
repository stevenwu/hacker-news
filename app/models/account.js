import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  following: DS.attr(),
  favorites: DS.attr(),
  pins: DS.attr()
});
