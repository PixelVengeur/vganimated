var modal = document.getElementById("modal-bg");

var img = $('.myImg');
var modalImg = $('#modal-img');

var imgTitle = document.getElementById("title");
var imgCom = document.getElementById("commission");


var modelA1 = document.getElementById("model1");
var line1 = document.getElementById("modelLine1");

var modelA2 = document.getElementById("model2");
var line2 = document.getElementById("modelLine2");

var modelA3 = document.getElementById("model3");
var line3 = document.getElementById("modelLine3");


var twitterPost = document.getElementById("twitterPost");

var redditPost = document.getElementById("redditPost");

var span = document.getElementsByClassName("X")[0];

$('.content').click(function()
{
	modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
	
	var altTab = this.alt.split(' : ')
	
	// Title
	
	imgTitle.innerHTML = altTab[0];
	
	
	// Commissioner
	
	if (altTab[1]);
	{
		imgCom.innerHTML = altTab[1];
	}
	
	if (! altTab[1])
	{
		imgCom.innerHTML = 'Anonymous';
	}
	
	
	// Model 1	
	
	if (altTab[2]);
	{
		line1.style.display = "block";
		modelA1.innerHTML = altTab[2];
	}
	
	if (! altTab[2])
	{
		line1.style.display = "none";
	}
	
	
	// Model 2
	
	if (altTab[3])
	{
		line2.style.display = "block";
		modelA2.innerHTML = altTab[3];
	}
	
	if (! altTab[3])
	{
		line2.style.display = "none";
	}
	
	
	// Model 3
	
	if (altTab[4])
	{
		line3.style.display = "block";
		modelA3.innerHTML = altTab[4];
	}
	
	if (! altTab[4])
	{
		line3.style.display = "none";
	}
	
	
	// Twitter post
	
	if (altTab[5])
	{
		twitterPost.style.display = "flex";
		$('#twitterPost').attr("href", altTab[5]);
	}
	
	if (! altTab[5])
	{
		twitterPost.style.display = "none";
	}
	
	
	// Reddit post
	
	if (altTab[6])
	{
		redditPost.style.display = "flex";
		$('#redditPost').attr("href", altTab[6]);
	}
	
	if (! altTab[6])
	{
		redditPost.style.display = "none";
	}
	
	
	// Full resolution
	
	$('#full').attr("href", newSrc);
});

span.onclick = function()
{
	modal.style.display = "none";
}

