import Ember from 'ember';

export default Ember.Component.extend({
  selectedProduct: null,
  isEditing: false,

  actions: {
    showProduct(product) {
      this.set('selectedProduct', product);
    },
    update(params, product) {
      this.sendAction('update', params, product);
    },
    delete(product) {
      this.set('selectedProduct', null);
      this.sendAction('delete', product);
    },
  }
});
