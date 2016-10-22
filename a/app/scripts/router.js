var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/post');
var views = require('./view/index');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'renderForm'
  },

  initialize: function(){
    this.collection = new models.PostCollection();
  },

  renderForm: function(){
    var form = new views.PostForm({collection: this.collection});
    console.log(form);
    $('#app').html(form.render().el);
    console.log(form);
  }
});

var router = new AppRouter();

module.exports = router;
