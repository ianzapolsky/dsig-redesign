define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  
  var App = Backbone.View.extend({

    el: '.brothers',

    initialize: function() {
      var _this = this;
      $.getJSON('assets/scripts/views/brothers.json', function(data) {
        _this.data = data;
      });
    },

    events: {
      'click a': 'handleClick'
    },

    handleClick: function(ev) {
      ev.preventDefault();
      if (ev.target.innerHTML === 'E-Board') {
        var bros = _.filter(this.data, function(bro) {
          return bro.eboard;
        });
        var content = _.template( $('#eboard-template').html(), { Brothers: bros });
      } else {
        var year = ev.target.innerHTML;
        var bros = _.filter(this.data, function(bro) {
          return String(bro.year) === ev.target.innerHTML;
        });
        var content = _.template( $('#brothers-template').html(), { Brothers: bros });
      }
      $('#brothers-container').html(content);
    }

  });
  
  return App;
});

    
