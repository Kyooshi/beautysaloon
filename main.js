//DOM
/*----------------- ABRE E FECHA O MENU---------------------*/
const nav = document.querySelector('#header nav') //criando uma constante chamada nav que irá transformar em objeto os itens que o 'querySelector' encontrou dentro do 'document'

//querySelector - funciona como um buscador
//document - transforma o html em objeto

const toggle = document.querySelectorAll('nav .toggle')

//querySelectorAll - encontra todos os itens, no caso que contenham nav classe toggle no código

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/*para cada item da constante toggle (const toggle) rodar e armazenar na variavel 'element'
  na váriavel 'element' vai 'adicionar um evento' (evento - click, irá executar uma função 
    função - dentro da tag nav, irá buscar na lista de classes dela e toggle (trocar) se houver ou não houver 
    a classe 'show', ou seja, caso tenha uma classe 'show' dentro da nav, ele retira e vice-versa sempre quando o evento 'click' for executado*/
/*----------------- CLICAR EM UM ITEM DO MENU - ESCONDER O MENU ---------------------*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show') //da lista de classe da nav, irá remover a class show para o menu sumir
  })
}
/*----------------- CRIAR SOMBRA NO HEADER QUANDO DER SCROLL PARA BAIXO ---------------------*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight //header.-dentro do objt header  offsetHeight - deslocamento da alura
function changeHeaderWhenSroll() {
  if (window.scrollY >= navHeight) {
    //se a janela (total) no scrool do eixo Y for maior ou igual a altura do nav
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*----------------- TESTIMONIALS CAROUSEL/SLIDE/SWIPE ---------------------*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2 /*muda a visibilidade para 2 por slide */,
      setWrapperSize: true
    }
  }
})
/*----------------- SCROLL REVELA: MOSTRA ELEMENTOS QUANDO DER SCROLL NA PAG ---------------------*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
  { interval: 100 }
)

/*----------------- SCROLL REVELA: MOSTRA O SUBIR PARA O TOPO ---------------------*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*----------------- MENU ATIVO CONFORME A SEÇÃO DA PÁGINA ---------------------*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*----------------- WHEN SCROLL ---------------------*/

window.addEventListener('scroll', function () {
  changeHeaderWhenSroll()
  backToTop()
  activateMenuAtCurrentSection()
})
