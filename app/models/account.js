import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  following: DS.attr('array', {defaultValue: []}),
  favorites: DS.attr('array', {defaultValue: []}),
  pins: DS.attr('array', {defaultValue: []})
});
