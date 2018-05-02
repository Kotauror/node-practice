// emitter module

function Emitter() {
  this.events = {};
}

// how we listen - how we add pairs of type & listener to an emiter.

Emitter.prototype.on = function(type, listener) { // eg. on message received (type), do ...(listener)
  this.events[type] = this.events[type] || [] // if it exists then fine, otherwise make an array
  this.events[type].push(listener)
}

// how make things happen

Emitter.prototype.emit = function(type) {
  if (this.events[type]) { // if I have this property on object
    this.events[type].forEach(function(listener) { // loop - its an array
      listener() // execute the method.
    })
  }
}

module.exports = Emitter;
