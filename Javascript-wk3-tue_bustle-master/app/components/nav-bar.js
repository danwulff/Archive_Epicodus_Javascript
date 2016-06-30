import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDropdown() {
      this.toggleProperty('dropdownOpen');
    }
  }
});
