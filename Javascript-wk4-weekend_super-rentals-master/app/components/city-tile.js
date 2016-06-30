import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }),
  sortBy: ['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
  actions: {
    destroyCity(city) {
      if (confirm("YOU ARE NOT A GOD")) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});