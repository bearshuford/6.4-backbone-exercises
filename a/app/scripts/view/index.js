var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/post_form.hbs');


var PostForm = Backbone.View.extend({
  events: {
      'submit': 'add'
  },

  el: '<form data-validate="true"></form>',

  template: formTemplate,

  render: function(){
    this.$el.html(this.template());
    // this.$el.validator();
    return this;
  },

  add: function(e){
    e.preventDefault();

    var newPost = {
      title: $('#post-title').val(),
      body: $('#post-body').val()
    };

    this.collection.create(newPost);

    this.$el.find("input[type=text], textarea").val("");
  }

})

module.exports = {
  PostForm: PostForm
}
