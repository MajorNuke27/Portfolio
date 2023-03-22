const navMenu = document.getElementById('nav-menu');

let prevYPos = window.scrollY;

window.onscroll = () => {
    var currentYPos = window.scrollY;

    if(prevYPos < currentYPos) {
        navMenu.ariaHidden = "true"
    }
    else {
        navMenu.ariaHidden = "false"
    }

    prevYPos = currentYPos;
};