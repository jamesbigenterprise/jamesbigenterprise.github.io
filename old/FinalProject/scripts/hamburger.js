function toggleMenu()
{
    /*console.log(document.getElementById("primaryNav").classList);*/
   var className = document.getElementById("primaryNav").getAttribute("class");
	if (className == "hide")
	{
		document.getElementById("primaryNav").classList.toggle("show");
	}
	else
	{
		document.getElementById("primaryNav").classList.toggle("show");
	}
}