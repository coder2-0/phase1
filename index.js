document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value.trim();
        const password = loginForm.password.value; 

        localStorage.setItem('username', username);

        
        if (username.endsWith('@worker.com')) {
            window.location.href = 'cowokers.html'; 
        } else if (username.endsWith('@owner.com')) {
            window.location.href = 'owner.html'; 
        } 
        else if (username.endsWith('@trainee.com')) {
            window.location.href = 'trainee.html'; 
        } 
        else {
            alert('Please use a valid email address.');
        }
    });

    const signupLink = document.getElementById('signupLink');
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'signup.html'; 
    });
});
