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

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 
