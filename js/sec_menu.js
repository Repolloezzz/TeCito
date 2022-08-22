//Sec Theme menu
const theme_button = document.querySelector('.theme-menu__button');
theme_button.addEventListener('click', () => {
    let theme_menu = document.querySelector('.theme__options')
    theme_menu.classList.toggle('theme__options--active')
})

//Sec Theme pestania section
class pestania{
    constructor(button, display){
        this.button = button;
        this.display = display;
    }
    on(){
        this.display.style.display = "grid"
        this.button.className = "theme__option-opt--active"
        let theme_menu = document.querySelector('.theme__options')
        theme_menu.classList.toggle('theme__options--active')
    }
    off(){
        this.display.style.display = "none"
        this.button.className = "theme__option-opt"
    }

}

let pestania_buttons = document.querySelectorAll('.theme__option-opt');
let pestania_box = document.querySelectorAll('.theme-container');

let pestania_list = [];
for(i = 0; i < pestania_box.length; i++){
    pestania_list.push(new pestania(pestania_buttons[i], pestania_box[i]));
}

pestania_list[0].on()

pestania_list.forEach(Element => {
    Element.button.addEventListener('click', () => {
        Element.on()
        pestania_list.forEach(aux => {
            if(Element != aux){
                aux.off()
            }
        })
    })
})

//Sec Subtheme menu nav
var subtheme_index = document.querySelectorAll('.subtheme_index');
for(var k = 0; k < subtheme_index.length; k++){
    subtheme_index[k].innerHTML = k+1;
}

var subtheme__button = document.querySelector('.subtheme-menu__button');
const subtheme_box = document.querySelector('.subtheme-menu')
subtheme__button.addEventListener('click', () => {
    subtheme_box.classList.toggle('subtheme-menu--active');
})


const subthene_indicator = document.getElementById('subtheme_indicator')
const subthemes = document.querySelectorAll('.subtheme-container')

var idea__controller = 0

let indexSeccionActiva;
const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            indexSeccionActiva = [...subthemes].indexOf(entrada.target);
            var position = 37*indexSeccionActiva;
            var tras = 'translateY('+position+'px)'
            subthene_indicator.style.transform = tras;
            if(idea__controller+1 == indexSeccionActiva){
                idea__controller = indexSeccionActiva;
                scrollR();
            } else{
                idea__controller = indexSeccionActiva;
                scrollL()
            }
        }
    });
}, {
    rootMargin: '80px 0px 0px 0px',
    threshold: 0.2
})

subthemes.forEach(subtheme => observer.observe(subtheme))

//Sec Subtheme idea
let subtheme_idea_button = document.querySelectorAll('.subtheme__idea__button--active');
const subtheme_idea = document.querySelector('.subtheme__idea');
subtheme_idea_button.forEach(idea_buton => {
    idea_buton.addEventListener('click', () => {
        subtheme_idea.classList.toggle('subtheme__idea--active');
    })
})

function scrollL(){
    let left = document.querySelector('.element-scroll');
    let idea_note_width = document.querySelector('.idea_note').clientWidth;
    left.scrollBy(-idea_note_width, 0)
}
function scrollR(){
    let right = document.querySelector('.element-scroll');
    let idea_note_width = document.querySelector('.idea_note').clientWidth;
    right.scrollBy(idea_note_width, 0)
}
