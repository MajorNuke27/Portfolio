const navMenu = document.getElementById('nav-menu');

let prevYPos = window.scrollY;

window.onscroll = () => {
    var currentYPos = window.scrollY;

    if(prevYPos < currentYPos) {
        navMenu.ariaHidden = "true"
        navMenu.classList.replace('show-nav', 'hide-nav')
    }
    else {
        navMenu.ariaHidden = "false"
        navMenu.classList.replace('hide-nav', 'show-nav')
    }

    prevYPos = currentYPos;
};