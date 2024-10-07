
// navbar scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar-custom');
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
};

// eye pada passowrd login dan register
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show the password
        icon.classList.remove('fa-eye'); // Change to eye-off icon
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Hide the password
        icon.classList.remove('fa-eye-slash'); // Change back to eye icon
        icon.classList.add('fa-eye');
    }
});

