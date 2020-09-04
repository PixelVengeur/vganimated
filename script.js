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

var altToggle = document.getElementsByClassName("alt-button-wrapper-wrapper")[0];

var twitterPost = document.getElementById("twitterPost");

var redditPost = document.getElementById("redditPost");

var backButton = document.getElementById('bckBtn');
var forwardButton = document.getElementById('fwdBtn');
var gallery = document.getElementsByClassName('content');
var i;
var z;

var alts = document.getElementsByName("altbox");
var altButtons = document.getElementsByClassName("alt-button");

for (i = 0 ; i < gallery.length ; i++)
{
	gallery[i].onclick = function()
	{
		// Retrieving information from the file
		var newSrc = this.src;
		var filename = newSrc.substring(newSrc.lastIndexOf('/')+1).split('.'); // Isolating the file name
        var filepath = newSrc.substring(0, newSrc.lastIndexOf('/')+1); // Isolating the directory
		var imageVersion = filename[0].split('%20-%20') // Isolate the image version
		
		// alert("filepath = " + filepath + "\nfilename[0] = " + filename[0] + "\nfilename[1] = " + filename[1] + "\nimageVersion[1] = " + imageVersion[1] + "\nimageversion[2] = " + imageVersion[2]);
		
		// If the image is the large version, remove that part from the basis
		if (imageVersion[1] == 'L' || imageVersion[2] == 'L')
			{
				filename[0] = filename[0].replace('%20-%20L','');
			}
		
		modal.style.display = "block";
		modalImg.attr('src', filepath + filename[0] + ' - L' + '.' + filename[1]);	
		document.getElementById("mem").value=this.id;
		
		$('#full').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);
		$('#full-button').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);

		for (z = 0 ; z < alts.length ; z++)
		{
			alts[z].onclick = function modalImgReplace()
			{
				if (this.value == 0)
					{
						// Replace the modal image with the normal version
						modalImg.attr('src', filepath + filename[0] + ' - L' + '.' + filename[1]);
							
						// Replace "Full Resolution" button's link with the normal version
						$('#full').attr("href", filepath + filename[0] + ' - L' + '.' + filename[1]);
					}

				else
					{
						// Replace the modal image with the numbered alt version
						modalImg.attr('src', filepath + filename[0] + ' - A' + this.value + '.' + filename[1]);
						
						// Replace "Full Resolution" button's link with the alt version
						$('#full').attr("href", filepath + filename[0] + ' - A' + this.value + '.' + filename[1]);
					}

				// Colour code the active image
				this.parentNode.style.background = "rgba(0, 150, 255, 0.85)";
				// Remove thecolour code for unchecked elements
				$(this).parent().siblings().css( "background", "var(--secondary)");
			}
		}
		
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
		
		
		// Alt toggle
		if (altTab[7])
		{
			$(altToggle).css("display", "block");
			$(altButtons[0]).css("display", "block")
			$(altButtons[1]).css("display", "block")
		}
		
		if (! altTab[7])
		{
			$(altToggle).css("display", "none");
		}

		if (altTab[8])
		{
			$(altButtons[2]).css("display", "block")
		}
		
		if (! altTab[8])
		{
			$(altButtons[2]).css("display", "none")
		}

		if (altTab[9])
		{
			$(altButtons[3]).css("display", "block")
		}
		
		if (! altTab[9])
		{
			$(altButtons[3]).css("display", "none")
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
		$(alts[0]).click();
	}

// Substracts 1 from the actual id to get the target image position in the reversed array.
	forwardButton.onclick = function()
	{
		ImageId = document.getElementById("mem").value.split("-");
		NextImage = parseInt(ImageId[1])-1;
		if(NextImage<0){NextImage=gallery.length-1;}
		imagesReversed[NextImage].click();
		$(alts[0]).click();
	}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Filters

$(document).ready(function()
{
	$('.list').click(function()
	{
		const value = $(this).attr('data-filter');

		$('.cell').not('.' + value).hide();
		$('.cell').filter('.' + value).show();
	})
})

// Add active effect on selected filter
$('.list').click(function()
{
	$(this).addClass('active').siblings().removeClass('active');
})

// Update the image tally next to the filter
var listEntry = document.getElementsByClassName("list");

for (i = 0 ; i < listEntry.length ; i++)
{
	var character = $(listEntry[i]).attr("data-filter");
	var charaCount = document.getElementsByClassName(character);
	document.getElementsByClassName("tally")[i].innerHTML = charaCount.length;
}
// document.getElementsByClassName("tally")[0].innerHTML = imageTally.length; 