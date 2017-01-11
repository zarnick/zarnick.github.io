// JavaScript Document
$(function(){
	
	console.log('ready');
	// check if we can use local storage and we have an item named background
	if(localStorage && localStorage.getItem('background')){
		
		//get the local storage item and put into a variable
		var colour = localStorage.getItem('background');
  			console.log(colour);
			
			// change css background colour of the body or a div 
			document.body.style.background = colour;
  		

	}
	var button = document.getElementById("submit");
	var backColour = document.getElementById("selColour");
	//button.addEventListener("click", buttonclick)
	
	$('#selColour').change(function() {
  var backColour2 = $('#selColour').val();
console.log($('#selColour').val());
	$('body').css('background-color', backColour2);
	localStorage.setItem('background', backColour2);

       
		
		

		
});

  



});


