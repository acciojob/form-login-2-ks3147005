//your JS code here. If required.
function submitForm(e) {
	e.preventDefault();

	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	
  const alertMessage = `First Name: ${firstName} 
Last Name: ${lastName} 
Phone Number: ${phoneNumber} 
Email ID: ${email}`;

            // Show the alert
            alert(alertMessage);
}    
             submitForm();          