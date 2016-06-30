import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if (confirm("YOU ARE NOT A GOD")) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
