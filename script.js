var modal = document.getElementById("modal-bg");

var img = $('.myImg');
var modalImg = $('#modal-img');

var imgTitle = document.getElementById("title");

var span = document.getElementsByClassName("X")[0];

$('.content').click(function()
{
	modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
	imgTitle.innerHTML = this.alt;
});

span.onclick = function()
{
	modal.style.display = "none";
}