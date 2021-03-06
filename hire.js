// UI cards

var card = document.getElementsByClassName("card");
var tierLevel = document.getElementById("tier-level");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var i;

var comTier = document.getElementById("comTier");

for (i = 0 ; i < card.length ; i++)
{
	let cardId = i + 1;
    card[i].onclick = function()
    {
    	comTier.value = "Tier " + cardId;
    	// document.getElementById("form-wrapper").scrollIntoView({ behavior: 'smooth', block: 'start'});

    	// tierLevel.innerHTML = "Tier " + cardId;
    	// switch (cardId)
    	// {
    	// 	case 1:
    	// 		image1.src = "./images/BrigStrip - WM - L.png"
    	// 		image2.src = "./images/DVaHighWayStar - L.png"
    	// 		image3.src = "./images/DVaOverflow - WM - L.png"
    	// 		tierLevel.style.color = "rgba(52, 211, 2, 0.8)"
    	// 		break;

    	// 	case 2:
    	// 		image1.src = "./images/MercyCollect - WM - A.png"
    	// 		image2.src = "./images/AsheFootjobStirrup - WM - L.png"
    	// 		image3.src = "./images/SombraBoobjob - WM - L.png"
    	// 		tierLevel.style.color = "rgba(255, 204, 0, 0.8)"
    	// 		break;

    	// 	case 3:
    	// 		image1.src = "./images/SombraWidowDoubleFootjob - L.png"
    	// 		image2.src = "./images/AnaPharahSpread - WM - L.png"
    	// 		image3.src = "./images/MercyPinkDVa - WM - L.png"
    	// 		tierLevel.style.color = "rgba(255, 130, 0, 1)"
    	// 		break;

    	// 	case 4:
    	// 		image1.src = "./images/AsheFaithWidow - WM - L.png"
    	// 		image2.src = "./images/ParkingSpot - WM - L.png"
    	// 		image3.src = ""
    	// 		tierLevel.style.color = "var(--accent)"
    	// 		break;

    	// }
     //    modal.style.display = "block";
    }
}

// Modal
var modal = document.getElementsByClassName("blur")[0];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


// Form to send to G Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjqVgkPpRrOMwwbPs9gjeK0YCxGro3fpH9B2YWbBY4SzKP_JA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e =>
{
	e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    	.then(response => console.log('Success!', response))
    	.catch(error => console.error('Error!', error.message))
})


// Display loaded image
var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};

// Cloudinary upload

window.ajaxSuccess = function () {
	response = JSON.parse(this.responseText);
  	console.log("ajaxSuccess", typeof this.responseText);
}

window.AJAXSubmit = function (formElement)
{
	console.log("starting AJAXSubmit");
	if (!formElement.action) { return; }
	var xhr = new XMLHttpRequest();
	xhr.onload = ajaxSuccess;
	xhr.open("post", "https://api.cloudinary.com/v1_1/vganimated/image/upload");
	xhr.send(new FormData(formElement));
}

// Acknowledge upload on button

$('button').on("click", function()
{
    console.log("Prout");
    $(this).hmtl("Sent!");
})


// Copy contact name to be the title of the image
var contact = document.getElementById("contact");
var imgName = document.getElementById("imgName");

contact.addEventListener('input', function()
	{
		imgName.value = contact.value  + ' - ' + Date.now();
	}
);