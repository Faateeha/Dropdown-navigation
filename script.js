function hamburger(){
    var menu = document.querySelector('.d-flex');
    var overlay = document.querySelector('.overlay');
    var closeBtn = document.querySelector('.close-btn');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    closeBtn.classList.toggle('active');
}