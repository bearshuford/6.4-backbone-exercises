var $ = require('jquery');
var Backbone = require('backbone');

var postItemTemplate = require('../../templates/post_item.hbs');
var postFullTemplate = require('../../templates/post.hbs');




var PostListing = Backbone.View.extend({
  tagName: 'div',
  className: 'list-group',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderPostItem);
  },

  renderPostItem: function(post){
    var context = postItemTemplate(post.toJSON());
    this.$el.append(context);
  }

});


var PostFull = Backbone.View.extend({
  tagNAme: 'div',
  className: 'panel panel-default',

  template: postFullTemplate,

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});


module.exports = {
  PostListing: PostListing,
  PostFull: PostFull
};
