const navMenu = document.getElementById('nav-menu');
const btToggleMenu = document.getElementById('toggle-menu');
const navList = document.getElementsByClassName('nav-bar-list')[0];
const mediaQuery = window.matchMedia('(max-width: 800px)');
const topBt = document.getElementById('top');

let prevYPos = window.scrollY;

window.onscroll = () => {
    // Handle nav bar
    var currentYPos = window.scrollY;

    if(prevYPos < currentYPos) {
        navMenu.ariaHidden = "true"
        navMenu.classList.replace('show-nav', 'hide-nav');
        if(navList.classList.contains('show-nav-menu')) btToggleMenu.click();
    }
    else {
        navMenu.ariaHidden = "false"
        navMenu.classList.replace('hide-nav', 'show-nav');
    }

    prevYPos = currentYPos;

    //Handle go to top link
    if(window.scrollY >= 100) {
        topBt.classList.add('show-top');
        topBt.ariaHidden = false;
    }
    else {
        topBt.classList.remove('show-top');
        topBt.ariaHidden = true;
    }

};

mediaQuery.addEventListener('change', () => {
    if(mediaQuery.matches){
        navList.setAttribute('aria-hidden', !navList.classList.contains('show-nav-menu'));
        btToggleMenu.setAttribute('aria-hidden', false);
    }
    else {
        navList.setAttribute('aria-hidden', false);
        btToggleMenu.setAttribute('aria-hidden', true);
    }
});

btToggleMenu.onclick = (evt) => {
    btToggleMenu.classList.toggle('opened');
    navList.classList.toggle('show-nav-menu');

    btToggleMenu.setAttribute('aria-expanded', btToggleMenu.classList.contains('opened'));
    navList.setAttribute('aria-hidden', !navList.classList.contains('show-nav-menu'));
}

