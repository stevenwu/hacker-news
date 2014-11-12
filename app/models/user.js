import DS from 'ember-data';

export default DS.Model.extend({
  delay: DS.attr(),
  created: DS.attr(),
  karma: DS.attr(),
  about: DS.attr(),
  // submitted: DS.hasMany('item', {async: true})
  submitted: DS.attr()
});
