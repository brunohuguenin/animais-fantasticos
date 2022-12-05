//CLASSES E ATRIBUTOS
/*const menu = document.querySelector('.menu');


menu.classList.add('ativo', 'teste', 'js')
menu.classList.remove('azul')


if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.contains('nao-possui-azul')

}

console.log(menu.classList)
*/

/*const animais = document.querySelector('.animais');

console.log(animais.attributes[1])

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt')
//console.log(img.getAttribute('alt'))

img.setAttribute('dasdasd', 'É uma Raposa')
console.log(srcImg)*/


// EXERCICIO
 
// Adiocione a classe "ativo" de todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo')
})

// Remova a classe "ativo" dos itens do menu e mantenha apenas o primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

// Verifique se as imagens prossuem o atributo "alt"

const imgs = document.querySelectorAll('img')
itensMenu.forEach((img) => {
    const possuiAteributo = img.hasAttribute('alt')
    console.log(possuiAteributo)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.instagram.com/brunohuguenin_/')