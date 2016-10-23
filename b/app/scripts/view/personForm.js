var $ = require('jquery');
var Backbone = require('backbone');
var formTemplate = require('../../templates/Person_form.hbs');


var PersonForm = Backbone.View.extend({
  tagName: 'form',

  events: {
      'submit': 'add'
  },

  template: formTemplate,

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  add: function(e){
    e.preventDefault();

    var newPerson = {
      name: {
        first: $('#firstname').val(),
        last: $('#lastname').val()
      },
      address: {
        street: $('#street').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zipcode: $('#zipcode').val()
      }
    };

    this.collection.create(newPerson);

    this.$el.find("input[type=text], textarea").val("");
  }

})

module.exports = {
  PersonForm: PersonForm
}
