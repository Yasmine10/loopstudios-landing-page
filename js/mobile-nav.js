// function toggleMobileNav() {
//     let toggle = document.getElementById('nav-toggle');


//     let nav = document.getElementsByClassName('header .nav-list');
//     if(nav.classList.contains('on')) {
//         nav.classList.remove('on');
//     } else {
//         nav.classList.add('on');
//     }
// }

let toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', function() {
    let body = document.getElementsByTagName('BODY')[0];
    let nav = document.getElementById('header-nav');

    if(nav.classList.contains('on')) {
        body.classList.remove('no-scroll');
        nav.classList.remove('on');
        toggle.classList.remove('on');
    } else {
        body.classList.add('no-scroll');
        nav.classList.add('on');
        toggle.classList.add('on');
    }
});