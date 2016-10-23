var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/person');
var views = require('./view/personForm');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'renderPersonForm'
  },

  initialize: function(){
    this.collection = new models.PersonCollection();
  },

  renderPersonForm: function(){
    var form = new views.PersonForm({collection: this.collection});
    console.log(form);
    $('#app').html(form.render().el);
    console.log(form);
  }
});

var router = new AppRouter();

module.exports = router;
