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

var cumToggle = document.getElementsByClassName("cum-switch-wrapper-wrapper")[0];

var twitterPost = document.getElementById("twitterPost");

var redditPost = document.getElementById("redditPost");

var span = document.getElementsByClassName("X")[0];

var backButton = document.getElementById('bckBtn');
var forwardButton = document.getElementById('fwdBtn');
var gallery = document.getElementsByClassName('content');
var i;

const cumSwitch = document.querySelector('.cum-switch input[type="checkbox"]');

for (i = 0 ; i < gallery.length ; i++) {
	gallery[i].onclick = function()
	{
		// Retrieving information from the file
		var newSrc = this.src;
		var filename = newSrc.substring(newSrc.lastIndexOf('/')+1).split('.'); // Isolating the file name
        var filepath = newSrc.substring(0, newSrc.lastIndexOf('/')+1); // Isolating the directory
		var imageVersion = filename[0].split('%20-%20') // Isolate the image version
		
		// alert("filepath = " + filepath + "\nfilename[0] = " + filename[0] + "\nfilename[1] = " + filename[1] + "\nimageVersion[1] = " + imageVersion[1]);
		
		// If the image is the large version, remove that part from the basis
		if (imageVersion[1] == 'L')
			{
				filename[0] = filename[0].replace('%20-%20L','');
			}
		
		modal.style.display = "block";
		modalImg.attr('src', filepath + filename[0] + ' - L' + '.' + filename[1]);	
		document.getElementById("mem").value=this.id;
		
		$('#full').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);
		
		
		// Cum Switch
		function switchCum(e)
		{
			if (e.target.checked)
			{
				modalImg.attr('src', filepath + 'Transition.png');
				
				// Replace the modal image with the cum version
				modalImg.attr('src', filepath + filename[0] + ' - C' + '.' + filename[1]);
				
				// Replace "Full Resolution" button's link with the cum version
				$('#full').attr("href", filepath + filename[0] + ' - C' + '.' + filename[1]);
				
				localStorage.setItem('cumState', 'cum');
			}
			else
			{
				// Replace the modal image with the cumless version
				modalImg.attr('src', filepath + filename[0] + ' - L' + '.' + filename[1]);
				
				// Replace "Full Resolution" button's link with the cumless version
				$('#full').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);
			
				localStorage.setItem('cumState', 'nocum');
			}
		}
		
		
		cumSwitch.addEventListener('change', switchCum, false);
		
		
		// Split the image alt
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
		
		
		// Cum toggle
		if (altTab[7])
		{
			cumToggle.style.display = "block";
		}
		
		if (! altTab[7])
		{
			cumToggle.style.display = "none";
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
}};

// Create a "reversed" images array
	var imagesReversed = [];    
	var i = gallery.length;
	while(i--)
	{
		imagesReversed.push(gallery[i]);
	}

// Adds 1 from the actual id to get the target image position in the reversed array.
	backButton.onclick = function()
	{
		ImageId = document.getElementById("mem").value.split("-");
		PreviousImage = parseInt(ImageId[1])+1;
		if(PreviousImage>gallery.length-1){PreviousImage=0;}
		imagesReversed[PreviousImage].click();
	}

// Substracts 1 from the actual id to get the target image position in the reversed array.
	forwardButton.onclick = function()
	{
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



