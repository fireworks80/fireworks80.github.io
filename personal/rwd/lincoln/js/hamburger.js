;(function() {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav-wrap');

    var toggleHook = function() {
        hamburger.classList.toggle('on');
        nav.classList.toggle('on');
        document.body.classList.toggle('on');
    };

    hamburger.addEventListener('click', toggleHook);
}());