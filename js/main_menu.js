//MAIN Menu responsive
function responsive(){
    var screen = document.getElementById('windows');
    var tamanio = parseInt(screen.clientWidth);
    return tamanio
}
if (responsive() < 800) {
    const menu__button = document.querySelector(".menu__button");
    const main_menu = document.querySelector(".main-menu");
    const main_menu__block = document.querySelector(".main-menu__block");

    menu__button.addEventListener("click", () => {
        menu__button.classList.toggle("menu__button--active");
        main_menu.classList.toggle("main-menu--active");
        main_menu__block.classList.toggle("main-menu__block--active");
    });
    main_menu__block.addEventListener("click", () => {
        menu__button.classList.toggle("menu__button--active");
        main_menu.classList.toggle("main-menu--active");
        main_menu__block.classList.toggle("main-menu__block--active");
    });

    //MAIN Submenus
    let submenus = document.querySelectorAll(".menu-item_submenu");
    submenus.forEach((element) => {
        element.addEventListener("click", () => {
        element.classList.toggle("submenu--active");
        let alto = 0;
        let submenu = element.nextElementSibling;
        if (submenu.clientHeight == "0") {
            alto = submenu.scrollHeight;
        }
        submenu.style.height = String(alto) + "px";
        });
    });
}


