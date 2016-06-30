import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipSearch() {
      var params = {
        zip: this.get("zip")
      };
      this.sendAction('zipSearch', params);
    }
  }
});
