import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr(),
  brand: DS.attr(),
  price: DS.attr(),
  sale: DS.attr( {defaultValue: 0} ),
  description: DS.attr(),
  image: DS.attr(),
  category: DS.attr()
});
