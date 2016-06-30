import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set('updateForm', true);
    },
    update(product) {
      var params = {
        title: this.get('newTitle'),
        brand: this.get('newBrand'),
        price: parseInt(this.get('newPrice'))  ? parseInt(this.get("newPrice")) : undefined,
        sale: parseInt(this.get('newSale'))  ? parseInt(this.get("newSale")) : undefined,
        image: this.get('newImage'),
        description: this.get('newDescription'),
        category: this.get('newCategory')
      };
      this.set('updateForm', false);
      this.sendAction('update', params, product);
    },
    delete(product) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.sendAction('delete', product);
      }
    }
  }
});
