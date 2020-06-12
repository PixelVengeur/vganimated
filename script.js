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

var backButton = document.getElementById('bckBtn');
var forwardButton = document.getElementById('fwdBtn');
var gallery = document.getElementsByClassName('content');
var i;

for (i = 0 ; i < gallery.length ; i++) {
	gallery[i].onclick = function()
	{
		modal.style.display = "block";
		var newSrc = this.src;
		var filename = newSrc.substring(newSrc.lastIndexOf('/')+1).split('.');
        var filepath = newSrc.substring(0, newSrc.lastIndexOf('/')+1);
		// alert("filepath = " + filepath + "\nfilename[0] = " + filename[0] + "\nfilename[1] = " + filename[1]);
		modalImg.attr('src', filepath + filename[0] + ' - L' + '.' + filename[1]);
		document.getElementById("mem").value=this.id;
		
		
		
		
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
		
		$('#full').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);
}};

// Create a "reversed" images array
	var imagesReversed = [];    
	var i = gallery.length;
	while(i--){
    imagesReversed.push(gallery[i]);
}

// Adds 1 from the actual id to get the target image position in the reversed array.
	backButton.onclick = function(){
    ImageId = document.getElementById("mem").value.split("-");
    PreviousImage = parseInt(ImageId[1])+1;
    if(PreviousImage>gallery.length-1){PreviousImage=0;}
    imagesReversed[PreviousImage].click();
}

// Substracts 1 from the actual id to get the target image position in the reversed array.
	forwardButton.onclick = function(){
    ImageId = document.getElementById("mem").value.split("-");
    NextImage = parseInt(ImageId[1])-1;
    if(NextImage<0){NextImage=gallery.length-1;}
    imagesReversed[NextImage].click();
}

span.onclick = function()
{
	modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 





