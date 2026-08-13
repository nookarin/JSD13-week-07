// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task

console.log(document.getElementById('main-title',));
console.log(document.querySelector('.submit-btn'));
console.log(document.querySelector('.task'));
// 2. Modifying Content    -> .label, #msg, #card

console.log(document.querySelector('.label').textContent = "hello world label");
console.log(document.getElementById('msg').textContent = "hello world msg");
console.log(document.getElementById('card').textContent = "hello world card");

// 3. classList            -> #themeBtn, .card

console.log(document.getElementById('themeBtn').classList.add("dark-theme"));
console.log(document.querySelector('.card').classList.add("dark-theme"));

// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks



// 5. Events               -> #click-me, #list, #signupForm, #email, .error

const btn = document.getElementById('click-me');
let count = 0;
btn.addEventListener("click", function() {
    console.log(count);
    count++;
    console.log(btn.textContent);
});

document.addEventListener("keydown", (e)=>{
    console.log(e.target.value)
    console.log(e.log)
    eventDiv.textContent = e.target.value;
});
// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
