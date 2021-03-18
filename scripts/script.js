// preload
window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

// openMenu
let menu = document.querySelector('.menu');
let menu__sidebar = document.querySelector('.menu__sidebar');
let exit = document.querySelector('.menu__exit');
let menu__body = document.querySelector('.menu__body');

function openMenu() {
    menu__sidebar.classList.remove('menu__sidebar_hidden');
    menu__sidebar.classList.add('menu__sidebar_visible');

}
// closeMenu
function closeMenu() {
    menu__sidebar.classList.add('menu__sidebar_hidden');
}

let menu__link = document.querySelectorAll(".menu__link");
for (let i = 0; i < menu__link.length; i++) {
    menu__link[i].onclick = closeMenu;
}

exit.addEventListener('click', closeMenu);
menu.addEventListener('click', openMenu);

// scroll page
let btnScrollDown = document.querySelector('.arrow-down');
let windowCoords = document.documentElement.clientHeight;

function scrollDown() {

    (function scroll() {
        if (window.pageYOffset < windowCoords) {
            window.scrollBy(0, 5);
            setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
            window.scrollTo(0, windowCoords);
        }
    })();
}

btnScrollDown.addEventListener('click', scrollDown);
// popup
let btnSettings = document.querySelector('.card-settings');
let btnRepair = document.querySelector('.card-repair');
let btnTransportation = document.querySelector('.card-transportation');
let btnDiagnostics = document.querySelector('.card-diagnostics');
let popup = document.querySelector('.popup');
let popup_settings = document.querySelector('.popup-settings');
let popup_repair = document.querySelector('.popup-repair');
let popup_transportation = document.querySelector('.popup-transportation');
let popup_diagnostics = document.querySelector('.popup-diagnostics');
let closeBtnDiagnostics = document.querySelector('.popup__exit-img-diagnostics');
let closeBtnTransportation = document.querySelector('.popup__exit-img-transportation');
let closeBtnRepair = document.querySelector('.popup__exit-img-repair');
let closeBtnSettings = document.querySelector('.popup__exit-img-settings');

// Settings
function openPopupSettings() {
    popup_settings.classList.remove('invisible');
}

function closePopupSettings() {
    popup_settings.classList.add('invisible');
}
// Repair
function openPopupRepair() {
    popup_repair.classList.remove('invisible');
}

function closePopupRepair() {
    popup_repair.classList.add('invisible');
}
// Transportation
function openPopupTransportation() {
    popup_transportation.classList.remove('invisible');
}

function closePopupTransportation() {
    popup_transportation.classList.add('invisible');
}
// Diagnostics
function openPopupDiagnostics() {
    popup_diagnostics.classList.remove('invisible');
}

function closePopupDiagnostics() {
    popup_diagnostics.classList.add('invisible');
}
btnSettings.addEventListener('click', openPopupSettings);
closeBtnSettings.addEventListener('click', closePopupSettings);
btnRepair.addEventListener('click', openPopupRepair);
closeBtnRepair.addEventListener('click', closePopupRepair);
btnTransportation.addEventListener('click', openPopupTransportation);
closeBtnTransportation.addEventListener('click', closePopupTransportation);
btnDiagnostics.addEventListener('click', openPopupDiagnostics);
closeBtnDiagnostics.addEventListener('click', closePopupDiagnostics);


// work-slider
let work_cards = document.querySelector('.work__cards');
let arrow_left = document.querySelector('.arrow_posishion_left');
let arrow_right = document.querySelector('.arrow_posishion_right');
let work_card = document.querySelector('.work__card');
let i = 0;

function sliderLeft() {
    if (i < 0) {
        i += 100;
        work_cards.style.transform = `translateX(${i}%)`;
        work_cards.style.transition = '1s';
    }
    if (i === 0) {
        i = -500;
    }
}

function sliderRight() {
    if (i > -400) {
        i -= 100;
        work_cards.style.transform = `translateX(${i}%)`;
    }
    if (i === -400) {
        i = 100;
    }
}

arrow_left.addEventListener('click', sliderLeft);
arrow_right.addEventListener('click', sliderRight);