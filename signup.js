let users = [];

document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        var fullName = document.getElementById('fullname').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
  
        var errorMessage = '';
        if (!fullName) {
            errorMessage = 'Please enter your full name.';
        } else if (!email.includes('@')) {
            errorMessage = 'Please enter a valid email address.';
        } else if (password.length < 8) {
            errorMessage = 'Your password must be at least 8 characters long.';
        } else if (password !== confirmPassword) {
            errorMessage = 'Your passwords do not match.';
        }
  
        if (errorMessage) {
            alert(errorMessage);
            return;
        }
  
        var user = {
            fullName: fullName,
            email: email,
            password: password, 
        };
  
        
        users.push(user);
  
        console.log('Users:', users);
  
        alert('Sign up successful!');
    });
});
