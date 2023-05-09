// ########################################### FUNÇÃO OFICIAL ####################################################

function initTabMenu() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function ativeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        ativeTab(index);
      });
    });
  }
}
initTabMenu();

// ############################################  Acordeon list ###################################################

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativado = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(ativado);
    accordionList[0].nextElementSibling.classList.add(ativado);
    function ativarClasseAoClick() {
      this.classList.toggle(ativado);
      this.nextElementSibling.classList.toggle(ativado);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", ativarClasseAoClick);
    });
  }
}
initAccordion();
// ############################################  ScrollSmooth ###################################################

function InitIscrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function goToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      blok: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", goToSection);
  });
}
InitIscrollSmooth();
// ############################################  ScrollAnimation ###################################################

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisibleSection = sectionTop - windowMetade < 0;
        if (isVisibleSection) {
          section.classList.add("animation");
        } else {
          section.classList.remove("animation");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimationScroll();
