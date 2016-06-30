import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartCount: Ember.computed('shoppingCart.change', function() {
    var total = 0;
    var products = this.get('shoppingCart.items');
    products.forEach(function(product) {
      total = total + product.amount;
    });
    return total;
  })
});
