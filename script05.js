const h1 = document.querySelector('h1');
const animaisLi = document.querySelector('.animais-descricao')


h1.outerHTML = '<p>Novo Título</p>'

// console.log(animaisLi.innerText)

const lista = document.querySelector('.animais-lista');

//console.log(lista.parentElement.parentElement.parentElement)

console.log(lista.children[lista.children.length-1])

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo')

//animais.appendChild(titulo)

// contato.insertBefore(animais, titulo)

const mapa = document.querySelector('.mapa')
contato.replaceChild(lista, titulo)

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Título criado pelo JS';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

console.log(novoH1)

// PAREI EM CLONAR ELEMENTOS