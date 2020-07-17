// UI cards

var card = document.getElementsByClassName("card");
var tierLevel = document.getElementById("tier-level");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var i;

// for (i = 0 ; i < card.length ; i++)
// {
// 	let cardId = i + 1;
//     card[i].onclick = function()
//     {
//     	tierLevel.innerHTML = "Tier " + cardId;
//     	switch (cardId)
//     	{
//     		case 1:
//     			image1.src = "./images/BrigStrip - WM - L.png"
//     			image2.src = "./images/DVaHighWayStar - L.png"
//     			image3.src = "./images/DVaOverflow - WM - L.png"
//     			tierLevel.style.color = "rgba(52, 211, 2, 0.8)"
//     			break;

//     		case 2:
//     			image1.src = "./images/MercyCollect - WM - A.png"
//     			image2.src = "./images/AsheFootjobStirrup - WM - L.png"
//     			image3.src = "./images/SombraBoobjob - WM - L.png"
//     			tierLevel.style.color = "rgba(255, 204, 0, 0.8)"
//     			break;

//     		case 3:
//     			image1.src = "./images/SombraWidowDoubleFootjob - L.png"
//     			image2.src = "./images/AnaPharahSpread - WM - L.png"
//     			image3.src = "./images/MercyPinkDVa - WM - L.png"
//     			tierLevel.style.color = "rgba(255, 130, 0, 1)"
//     			break;

//     		case 4:
//     			image1.src = "./images/AsheFaithWidow - WM - L.png"
//     			image2.src = "./images/ParkingSpot - WM - L.png"
//     			image3.src = ""
//     			tierLevel.style.color = "var(--accent)"
//     			break;

//     	}
//         modal.style.display = "block";
//     }
// }

// Modal
var modal = document.getElementsByClassName("blur")[0];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 