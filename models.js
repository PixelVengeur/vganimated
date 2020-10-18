// var models = document.querySelector(".model-wrapper >* div h4 a");

// models.style.display = "none";

// for (i = 0 ; i < models.length ; i++)
// {
// 	models[i].onclick = function()
// 	{
// 		alert("Prout");
// 	}
// }
var models = $(".model-wrapper >* div h4");

for (i = 0 ; i < models.length ; i++)
{
	models[i].onclick = function()
	{
		$('.blur').css("display", "flex");

		$(".modal-character").html(this.innerHTML);
		console.log($(this).children("a").attr('alt'));
		$(".gallery-button").children("a").attr("href", $(this).children("a").attr('alt'))

		let modelToCleanup = this.innerHTML.split(">")[1];

		console.log("modelToCleanup = " + modelToCleanup);

		let cleanModel = modelToCleanup.split("<")[0];

		console.log("cleanModel = " + cleanModel); 

		document.getElementsByClassName("modal-title")[0].innerHTML = this.innerHTML;

		$("#lazy-load").attr("src", "models/" + cleanModel + ".glb");
	}
}

$(".blur").click(function(event)
{
	console.log(event.target);
	if (event.target == document.getElementById("blur"))
	{
		$(this).css("display", "none");
	}
});