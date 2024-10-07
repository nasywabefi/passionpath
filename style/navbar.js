// JavaScript untuk sticky navbar
window.onscroll = function() {
    stickyNavbar();
};

var navbar = document.querySelector('.navbar-custom');
var sticky = navbar.offsetTop; // Posisi navbar

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky'); // Tambahkan class sticky
    } else {
        navbar.classList.remove('sticky'); // Hapus class sticky
    }
}