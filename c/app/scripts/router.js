var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/post');
var views = require('./views/reader');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':id': 'getPost'
  },

  initialize: function(){
    this.collection = new models.PostCollection();
    this.collection.fetch();
  },

  index: function(){
    var postListing = new views.PostListing({collection: this.collection});

    $('#list-pane').html(postListing.render().el);
  },

  getPost: function(id){
    var self = this;
    var post = this.collection.get(id);

    // If we don't have a post, fetch and bail (from notes)
    if(!post){
      this.index();
      this.collection.fetch().then(function(){
        self.getPost(id);
      });
      return;
    }

    var postFull = new views.PostFull({model: post});

    $('a.active.list-group-item').removeClass('active');
    $('#'+id).addClass('active');

    post.set('active')

    $('#post-pane').html(postFull.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
