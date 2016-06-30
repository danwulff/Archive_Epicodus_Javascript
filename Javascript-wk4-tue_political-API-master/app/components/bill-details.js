import Ember from 'ember';

export default Ember.Component.extend({
  details: false,
  actions: {
    showDetails() {
      this.set("details", true)
    },
    hideDetails() {
      this.set('details', false)
    }
  }
});
