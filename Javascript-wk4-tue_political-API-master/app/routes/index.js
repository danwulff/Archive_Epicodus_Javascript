import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipSearch(params) {
      this.transitionTo('results', params.zip);
    },
  }
});
