
function redAudi() 
{
	document.getElementById("audiBlack").style.visibility = "hidden";
	document.getElementById("audiSilver").style.visibility = "hidden";
	document.getElementById("audiYellow").style.visibility = "hidden";
	document.getElementById("audiRed").style.visibility = "visible";
}
function blackAudi()  
{	
	document.getElementById("audiRed").style.visibility = "hidden";
	document.getElementById("audiSilver").style.visibility = "hidden";
	document.getElementById("audiYellow").style.visibility = "hidden";
    document.getElementById("audiBlack").style.visibility = "visible";
}
function silverAudi() 
{
	document.getElementById("audiYellow").style.visibility = "hidden";
	document.getElementById("audiRed").style.visibility = "hidden";
	document.getElementById("audiBlack").style.visibility = "hidden";
    document.getElementById("audiSilver").style.visibility = "visible";
}
function yellowAudi()  
{
	document.getElementById("audiRed").style.visibility = "hidden";
	document.getElementById("audiBlack").style.visibility = "hidden";
	document.getElementById("audiSilver").style.visibility = "hidden";
	document.getElementById("audiYellow").style.visibility = "visible";
}
