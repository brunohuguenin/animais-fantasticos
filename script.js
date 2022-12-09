// Navegação por TAB

const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');
tabcontent[0].classList.add('ativo')

if (tabmenu.length && tabcontent.length) {
    function activtab(index) {
        tabcontent.forEach((section) => {
            section.classList.remove('ativo');
        })
        tabcontent[index].classList.add('ativo');
    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function(){
            activtab(index);
        })
    });
}