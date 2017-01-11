

function validateForm() {
     if( document.myForm.firstname.value == "" )
         {
            alert( "Please provide your firstname!" );
            document.myForm.firstname.focus() ;
            return false;
         }
		 
	if( document.myForm.lastname.value == "" )
         {
            alert( "Please provide your lastname!" );
            document.myForm.lastname.focus() ;
            return false;
         }
         
    if(( document.myForm.email.value == "" &&  document.myForm.email.value != "@" ))
         {
            alert( "Please provide a valid Email!" );
            document.myForm.email.focus() ;
            return false;
         }
		 
	if( document.myForm.feedback.value == "" )
         {
            alert( "Please provide your feedback!" );
            document.myForm.feedback.focus() ;
            return false;
         }
		 
    }
