/*const animais = document.getElementById('animais')
console.log(animais.innerText)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection.leght)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[2])

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)*/


/*
// Retorne no sonsole todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img)

// Retorne no sonsole apenas as imagens que começam com a palavra 'imagem'

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

// Selecione os links internos (onde o href começa com '#')

const linksInterno = document.querySelectorAll('[href^="#')
console.log(linksInterno)

// Selecione a primeira h2 dentro de .animais-descricao

const subTitulo = document.querySelector('.animais-descricao h2')
console.log(subTitulo)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])*/

const imgs = document.querySelectorAll('img');

let i = 0;
imgs.forEach(function(item, index, array){ //pode ser qualquer nome pois é uma var
    console.log(item, index, array)
})