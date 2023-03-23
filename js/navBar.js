const navMenu = document.getElementById('nav-menu');
const btToggleMenu = document.getElementById('toggle-menu');
const navList = document.getElementsByClassName('nav-bar-list')[0];
const mediaQuery = window.matchMedia('(max-width: 800px)');

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

mediaQuery.addEventListener('change', () => {
    if(mediaQuery.matches) {
        navList.setAttribute('aria-hidden', true);
    }
})

btToggleMenu.onclick = (evt) => {
    btToggleMenu.classList.toggle('opened');
    navList.classList.toggle('show-nav-menu');

    btToggleMenu.setAttribute('aria-expanded', btToggleMenu.classList.contains('opened'));
    navList.setAttribute('aria-hidden', !navList.classList.contains('show-nav-menu'));
}

