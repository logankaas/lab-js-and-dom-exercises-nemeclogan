// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

const textarea = document.querySelector("textarea");
const stat = document.getElementById("stat");
textarea.addEventListener("onkeyup", function (e) {
  let words = 0;
  let chars = 0;
    if (textarea.value){
      words = textarea.value.trim().split(" ").length;
      chars = textarea.value.trim().length;
    }
    stat.innerHTML = 
    "You've Written" + words + " words and " + chars + "characters.";
});