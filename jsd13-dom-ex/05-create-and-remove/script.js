// Creating & Removing Elements
// Open index.html and work through these in order.

// TODO 1: Select #item-input, #add-item-btn, #items (the <ul>), and
// #item-count (the <span>).

console.log(document.getElementById('item-input'));
console.log(document.getElementById('add-item-btn'));
console.log(document.getElementById('items'));
console.log(document.getElementById('item-count'));


// TODO 2: Write a function updateCount() that sets item-count's textContent
// to the number of <li> elements currently in the list (items.children.length).

function updateCount() {
    document.getElementById("item-count").textContent =
        document.getElementById("items").children.length;
}



// TODO 3: Add a "click" listener on #add-item-btn. Inside it:
//   - read and trim the input's value; if empty, do nothing
//   - create a new <li>, set its textContent to the value
//   - add a "click" listener on the <li> that removes it (li.remove())
//     and then calls updateCount() again
//   - add the <li> to the TOP of the list using items.prepend(li)
//   - clear the input
//   - call updateCount()

document.getElementById('add-item-btn').addEventListener('click', function(event) {

    let itemValue = document.getElementById("item-input").value.trim();

    if (itemValue === "") {
        console.log("not clicky");
         return; }

    const li = document.createElement("li");
    li.textContent = itemValue;

    li.addEventListener("click", function () { 
    li.remove(); 
    updateCount(); 
});

    document.getElementById("items").prepend(li);
    document.getElementById("item-input").value = "";
    updateCount(); 
    console.log("clicky");

});


