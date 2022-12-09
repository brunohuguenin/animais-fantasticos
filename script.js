// Navegação por TAB
function initTabNav() {
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
}

initTabNav();


// Accordion List
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activClass);
        accordionList[0].nextElementSibling.classList.add(activClass);

        function activAcsordion() {
            this.classList.toggle(activClass);
            this.nextElementSibling.classList.toggle(activClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activAcsordion)
        });
    }
}
initAccordion();


// Scrooll-suave para links internos

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
