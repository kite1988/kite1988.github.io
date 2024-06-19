// JavaScript Document

function show(id)
{
	var showDiv = document.getElementById(id);
    
	var aboutDiv  = document.getElementById("about");
	var researchDiv = document.getElementById("research");
	var publicationDiv = document.getElementById("publication");
	//var personalDiv = document.getElementById("personal");
	var softwareDiv = document.getElementById("software");
    var linkDiv = document.getElementById("links");

	
	aboutDiv.style.display="none";
	researchDiv.style.display="none";
	publicationDiv.style.display = "none";
	softwareDiv.style.display="none";
    linkDiv.style.display="none";
	//personalDiv.style.display="none";
    
	showDiv.style.display="block";
	
}