import Ember from 'ember';

export default Ember.Component.extend({
  totalPrice: Ember.computed('products.change', function() {
    var list = this.get('products.items');
    var total = 0;

    for (var i = 0; i < list.length; i++) {
      var salePrice = list[i].item.get('price') - list[i].item.get('price') * (list[i].item.get('sale')/100);
      total += salePrice * list[i].amount;
    }
    return total;
  })
});
