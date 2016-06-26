var dotcom = {

  events: [],

  ready: function() {
    this.triggerAll();
    this.resize();
  },

  resize: function() {
    $( window ).resize(function() {
      dotcom.triggerAll();
    }).bind(this);
  },

  addEvent: function(name, event) {
    this.events.push({
      "name": name,
      "event": event
    });
  },

  triggerAll: function() {
    jQuery.each(this.events, function(index, event) {
      this.trigger(event);
    }.bind(this));
  },

  trigger: function(event) {
    event.event();
  }
}

dotcom.init();
