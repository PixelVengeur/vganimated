window.onload = function()
{
	var origTitle = document.title;

	document.addEventListener("visibilitychange", function(e)
	{
		if(document.hidden)
		{
			document.title = 'christian minecraft memes - Google Image Search';
		}

		else
		{
			document.title = origTitle
		}
	});
};