// Get the modal
var modal = document.getElementsById("orderModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("orderButton");

// Get the element that closes the modal
var close = document.getElementsByClassName("btn-closeModal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(event) {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function(event) {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
