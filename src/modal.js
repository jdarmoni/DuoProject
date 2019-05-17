const Modal = document.addEventListener('DOMContentLoaded', () => {

let myModal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  myModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}



});

module.exports = Modal;

