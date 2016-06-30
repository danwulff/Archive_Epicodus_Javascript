import Ember from 'ember';

export default Ember.Component.extend({

  actualPrice: Ember.computed('product.item.price', 'product.item.sale', function() {
    return ((this.get('product.item.price') - this.get('product.item.price') * (this.get('product.item.sale') / 100.00)) * this.get('product.amount')).toFixed(2);
  })
});
