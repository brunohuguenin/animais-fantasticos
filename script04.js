/*const imag = document.querySelector('img')

function calback() {
    console.log('clicou')
}


imag.addEventListener('click', calback)*/



const imags = document.querySelectorAll('img');

function handLeImg(e){
    console.log(e.currentTarget.getAttribute('src'));
}

imags.forEach((img) =>{
    img.addEventListener('click', handLeImg)
})


// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    console.log(event)
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// Se o usuário clicar na tecla (t), aumente todo o texto do
site