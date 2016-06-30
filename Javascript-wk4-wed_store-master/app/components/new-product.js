import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveObject() {
      var params = {
        title: this.get("title"),
        brand: this.get("brand"),
        price: parseInt(this.get("price")),
        sale: parseInt(this.get("sale")) ? parseInt(this.get("sale")) : 0,
        description: this.get("description"),
        image: this.get("image"),
        category: this.get("category")
      };
      //console.log(params);
      this.sendAction('saveObject', params);
    }
  }
});
