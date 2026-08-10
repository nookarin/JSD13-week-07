// Events Basics
// Open index.html and work through these in order.

// TODO 1: Select #box, #log, and #key-display.

console.log(document.getElementById('box', 'log', 'key-display'))

// TODO 2: Add a "click" listener on #box that sets log's textContent to
// "Box clicked!". Inside the same listener, console.log() the event's
// event.type and event.target (the event object is the first argument
// your listener function receives).

document.getElementById('box').addEventListener('click', function(event) {
    log.textContent = 'Box clicked!'
    console.log(event.type, event.target)
});


// TODO 3: Add a "mouseover" listener on #box that adds the "hover" class
// to it, and a "mouseout" listener that removes the "hover" class.

document.getElementById('box').addEventListener('mouseover', function() {
    this.classList.add('hover')
    console.log("hovering")
});

document.getElementById('box').addEventListener('mouseout', function() {
    this.classList.remove('hover')
    console.log("not hovering")
});

// TODO 4: Add a "keydown" listener on the whole document. Inside it, set
// key-display's textContent to event.key (the key that was pressed).

document.addEventListener('keydown', function(event) {
    document.getElementById('key-display').textContent = event.key
    console.log(event.key)
});
