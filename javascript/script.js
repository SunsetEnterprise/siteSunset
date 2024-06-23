let botao = document.querySelector('.menuShow')

let seta_navegacao = document.querySelectorAll('.seta-navegacao')
const faqsProntos = document.querySelectorAll('.faqs-pronto');
// let swiperr = document.querySelector('.swiper')
const el = document.querySelector('#text')

const text = 'A experiência de tecnologia perfeita!'
const interval = 150;


botao.addEventListener('click',()=>{
    let x = document.querySelector('.menuShow1')
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    
    }

    botao.classList.add('close')
    if(botao.classList.contains('close')){
        botao.style.display = "none"
        x.style.display ="block"
    }

    x.addEventListener("click",()=>{
        if(x.style.display = "block"){
            botao.style.display = "block"
            x.style.display ="none"
            menuMobile.classList.remove('open')
        }
    })
})


faqsProntos.forEach(faqsPronto => {
  const setaNavegacao = faqsPronto.querySelector('.seta-navegacao');
  const none = faqsPronto.querySelector('.none');

  setaNavegacao.addEventListener('click', () => {
      if (none) {
          none.classList.toggle('none');
          if(setaNavegacao.src.includes ('imagens/setas-para-baixo.png')){
              setaNavegacao.src = 'imagens/setas-para-cima.png';
          }else{
              setaNavegacao.src = 'imagens/setas-para-baixo.png';
          }
        
      } 
  });
});


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 5,
//   spaceBetween: 2,
//   loop: true,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
// });




  let larguraTela = window.innerWidth;


  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    },
    autoplay: {
      delay: 2000, // Tempo em milissegundos entre cada slide
      disableOnInteraction: false, // Desativa a autonavegação quando o usuário interage com o slider
      pauseOnNone: false, // Não pausa o slider quando não há slides visíveis
      pauseOnMouseEnter: false, // Não pausa o slider quando o mouse entra no slider
      pauseOnHover: false // Não pausa o slider quando o mouse se aproxima do slider
  },
  breakpoints: {
    1920:{
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
 
    1010:{
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 2,
    },

  }
  });





  let botaoProjetos = document.querySelector(".buttonViewProject");
  let cards = document.querySelectorAll(".cardJs");
 
  
  window.addEventListener("resize", () => {
    const larguraTela = window.innerWidth;
    if (larguraTela <= 474) {
      cards.forEach((card) => {
        card.style.display = "none";
        botaoProjetos.style.display = "block";
      });
    } else {
      cards.forEach((card) => {
        card.style.display = "block";
        botaoProjetos.style.display = "none";
      });
    }
    
  });
  
  let projetosVisiveis = false;

  botaoProjetos.addEventListener('click', () => {
    if (projetosVisiveis) {
      botaoProjetos.textContent = "Vizualizar todos Projetos";
      cards.forEach((card) => {
        card.style.display = "none";
      });
    } else {
      botaoProjetos.textContent = "Recolher Projetos";
      cards.forEach((card) => {
        card.style.display = "block";
      });
    }
    projetosVisiveis = !projetosVisiveis;
  });

