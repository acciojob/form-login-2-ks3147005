//your JS code here. If required.
function submitForm(e) {
	
	 document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // prevent the form from submitting

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const email = document.getElementById('email').value;

            // Create the alert message with spaces
            const alertMessage = `First Name: ${firstName} 
Last Name: ${lastName} 
Phone Number: ${phoneNumber} 
Email ID: ${email}`;

            // Show the alert
            alert(alertMessage);
        });
}    
                 