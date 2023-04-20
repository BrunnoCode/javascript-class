
 // Retorne no console todas as imagens do site
    // const img = document.querySelectorAll("img");
    // console.log(img);

    // Retorne no console apenas as imagens que começaram com a palavra imagem
    // const imagensAnimais = document.querySelectorAll("img[src^='img/imagem']");
    // console.log(imagensAnimais);

    // Selecione todos os links internos ( onde o href começa com #)
    // const linksInterno = document.querySelectorAll("[href^='#']")
    // console.log(linksInterno)

    // Selecione o primeiro h2 dentro de .animais-descricao
    // const primeiroH2 = document.querySelector(".animais-descricao h2")
    // console.log(primeiroH2)

    // selecione o ultimo p do site
    // const paragraph = document.querySelectorAll('p')
    // console.log(paragraph[--paragraph.length]); RETORNA O ULTIMO P DE UM ARRAY LIKE

    // ################################ SEGUNDO EXERCICIO #############################

    // Mostre no console cada paragrafo do site
    // const paragraph = document.querySelectorAll('p')

    // paragraph.forEach((item,) => console.log(item))

    // Mostre o texto dos paragrafos no console
    // paragraph.forEach((item) => console.log(item.innerText))

    // ################################ TERCEIRO EXERCICIO #############################
    //  Verifique a distância da primeira imagem em relação ao topo da página
    // const img = document.querySelector('img')
    // const imgTop = img.offsetTop;
    // console.log(imgTop);


    // Retorne a soma da largura de todas as imagens
    // function resultado() {
    //   const todasImagens = document.querySelectorAll('img')
    //   let totalImg = 0
    //   todasImagens.forEach((img) => {
    //     totalImg += img.offsetWidth;
    //   })
    //   console.log(totalImg)
    // }
    // window.onload = function () { resultado(); }

    // Verifique se os links da página possuem o mínimo recomendado para lelas utilizadas com o dedo. (48px/48px de acordo com o google)

    // const links = document.querySelectorAll('a')

    // links.forEach((link) => {
    //   const linkWidth = link.offsetWidth
    //   const linkHeight = link.offsetHeight
    //   if (linkWidth >= 48 && linkHeight >= 48) {
    //     console.log(link, 'Possuem boa acessibilidade')
    //   } else {
    //     console.log(link, 'Não possuem boa acessibilidade')
    //   }
    // })

    // console.log(links)

    // Se o browser for menor que 720px, adicionar a classe menu-mobile ao menu
    // const menuMobile = window.matchMedia('(max-width: 720px)').matches
    // if (menuMobile) {
    //   const menu = document.querySelector('.menu')
    //   menu.classList.add('menu-mobile')
    // }
    // Exercicios

    // Quando o usuário clicar nos links internos do site,
    // adicione a classe ativo ao item clicado e remova dos
    // demais itens caso eles possuam a mesma. Previna
    // o comportamento padrão desses links

    // const linksInternos = document.querySelectorAll('a[href^="#"]')

    // function handleClick(event) {
    //   event.preventDefault()
    //   linksInternos.forEach((link) => {
    //     link.classList.add('ativo')
    //   })
    // }

    // linksInternos.forEach((links) => {
    //   links.addEventListener('click', handleClick)


    // Selecione todos os elementos do site começando a partir do body,
    // ao clique mostre exatamente quais elementos estão sendo clicados


    // Utilizando o código anterior, ao invés de mostrar no console,
    // remova o elemento que está sendo clicado, o método remove() remove um elemento


    // Se o usuário clicar na tecla (t), aumente todo o texto do site.

    // ##############################################################################################

    // Quando o usuário clicar nos links internos do site,
    // adicione a classe ativo ao item clicado e remova dos
    // demais itens caso eles possuam a mesma. Previna
    // o comportamento padrão desses links

    // const linksInternos = document.querySelectorAll('a[href^="#"]')

    // function handleLink(event) {
    //   event.preventDefault();
    //   linksInternos.forEach((link) => {
    //     link.classList.remove('active')
    //   })
    //   event.target.classList.add('active');
    // }

    // linksInternos.forEach((link) => {
    //   link.addEventListener('click', handleLink)
    // })

    // Selecione todos os elementos do site começando a partir do body,
    // ao clique mostre exatamente quais elementos estão sendo clicados
    // const todosElementos = document.querySelectorAll('body *')

    // function elementoClicado(event) {
    //   event.currentTarget.remove()
    // }

    // todosElementos.forEach((element) => {
    //   element.addEventListener('click', elementoClicado)
    // })

    // Utilizando o código anterior, ao invés de mostrar no console,
    // remova o elemento que está sendo clicado, o método remove() remove um elemento


    // Se o usuário clicar na tecla (t), aumente todo o texto do site.

    //   function handleT(event) {
    //     if (event.key === 't') {
    //       document.documentElement.classList.toggle('textoGrande')
    //     }
    //   }

    // window.addEventListener('keydown', handleT)
    // #######################################################################################

// Duplique o menu e adicione ele em copy
// const Menu = document.querySelector('.menu')
// const Copy = document.querySelector('.copy')

// const cloneMenu = Menu.cloneNode(true)
// Copy.appendChild(cloneMenu)
// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais
// const faq = document.querySelector('.faq')
// const animais = document.querySelector('.animais')

// faq.innerHTML = animais.innerHTML
