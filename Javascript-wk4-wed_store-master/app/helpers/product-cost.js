import Ember from 'ember';

  //THIS HELPER IS UNUSED

export function productCost(params) {
  var product = params[0];
  if (product.get('sale')) {
    return Ember.String.htmlSafe('style="color: #990000;"');
  }
}

export default Ember.Helper.helper(productCost);
