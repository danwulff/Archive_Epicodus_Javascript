import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=0ced776292cb4c098bd853f18731fa86';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
