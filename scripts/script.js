const menu__sidebar = document.querySelector('.menu__sidebar');
menu__sidebar.classList.add('menu__sidebar_hidden');

function addVisible() {
    menu__sidebar.classList.remove('menu__sidebar_hidden');
    menu__sidebar.classList.add('menu__sidebar_visible');

}

const menu = document.querySelector('.menu');
menu.addEventListener('click', addVisible);



const exit = document.querySelector('.menu__exit');

function CloseMenu() {
    menu__sidebar.classList.add('menu__sidebar_hidden');
}


exit.addEventListener('click', CloseMenu);