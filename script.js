let submitButton = document.querySelector('#submit-button');
function emailValidate(email) {
    if(email.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}
function clickListener(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    	if(emailValidate(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
  }
  console.log('Thanks for your message');
}

submitButton.addEventListener('click', clickListener);



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.attr('src', newSrc);
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

