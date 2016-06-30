import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  change: true,

  add(addedItem) {
    var found = false;
    this.set('change', !this.get('change'));
    this.get('items').forEach(function(instance) {
      if (instance.item === addedItem) {
        instance.amount += 1;
        found = true;
        return;
      }
    })
    if(!found) {
      var newItem = {
        item: addedItem,
        amount: 1
      };
      this.get('items').pushObject(newItem);
    }
  },
});
