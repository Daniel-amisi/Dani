// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");


// Toggle mobile meny visibility
// menuOpenButton.addEventListener("click", () => {
//     document.body.classList.toggle("show-mobile-menu");
// });

// close menu when the close button is clicked
// menuCloseButton.addEventListener("click", () => menuOpenButton.click ());




const swiper = new Swiper('.swiper-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
           0: {
              slidesPerView: 1
               },
             768: {
                slidesPerView: 2
               },
              1024: {
            slidesPerView: 3
              }
          }
  });





  // Diaporama d'image
  let index = 0;

function showImage() {
    let images = document.querySelectorAll('.diapo-img');

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    index++;
    if (index > images.length) {
        index = 1;
    }

    images[index - 1].classList.add('active');
}

setInterval(showImage, 3000); 


  window.onload = () => {
    const textElement = document.querySelector('.dacing-text')

    setTimeout(() => {
      textElement.style.animationPlayState = 'runing';
    }, 9000);
  };



// exercices pours changer des langues

const translations = {
  fr: {
      title: "Bienvenue sur notre site web",
      description: "Ceci est un site web simple pour montrer comment changer la langue.",
      content: "Le contenu de ce site changera en fonction de la langue choisie."
  },
  en: {
      title: "Welcome to our website",
      description: "This is a simple website to show how to change language.",
      content: "The content of this website will change according to the selected language."
  },
  sw: {
      title: "Karibu kwenye tovuti yetu",
      description: "Hii ni tovuti rahisi kuonyesha jinsi ya kubadilisha lugha.",
      content: "Maudhui ya tovuti hii yatabadilika kulingana na lugha iliyo chaguliwa."
  },
  es: {
      title: "Bienvenido a nuestro sitio web",
      description: "Este es un sitio web simple para mostrar cómo cambiar el idioma.",
      content: "El contenido de este sitio cambiará según el idioma seleccionado."
  },
  pt: {
      title: "Bem-vindo ao nosso site",
      description: "Este é um site simples para mostrar como mudar o idioma.",
      content: "O conteúdo deste site mudará de acordo com o idioma selecionado."
  }
};

function changeLanguage() {
  const language = document.getElementById("language").value;
  
  document.getElementById("title").textContent = translations[language].title;
  document.getElementById("description").textContent = translations[language].description;
  document.getElementById("content").textContent = translations[language].content;
}









// References des images
const images = [
  {
   src:"image/images (5).jpeg" ,
     title: "Projet 1"
  },
 
  {
     src:"image/image_004-0be626d1.jpeg",
      title: "Projet 2"
  },
 
   {
     src:"image/image_017-b927f277.jpeg" ,
      title: "Projet 3"
   },
   
   {
   src:"image/Dompierre-nano-7129059c.jpeg" ,
    title: "Projet 4"
   },
  
  {
   src:"image/image_001-0324c7df.jpeg",
    title: "Projet 5" 
  },
   

   { 
    src:"image/image_004-0be626d1.jpeg", 
     title:"Projet 6"
   },
  
   { 
    src:"image/image_006-171755a4.jpeg",
    title:"Projet 7"
   },
   
  { 
    src:"image/image_009-9759270c.jpeg" , 
    title:"Projet 8"
  },
  
  {  
    src:"image/image_010-aa79a415.jpeg" ,
     title:"Projet 9"
  },
   
    {
      src:"image/image_012-5886b64c.jpeg",
      title:"Projet 10"
     },
  
    {
      src:"image/image_014-0dffd75c.jpeg",
      title:"Projet 11"
     },
   
   { 
    src:"image/image_015-3cdfd0b8.jpeg",
    title:"Projet 12"
  } ,
  
    {
      src:"image/image_018-396980df.jpeg",
      title:"Projet 13 "
     },
   
  {
    src:"image/image_019-e12a220e.jpeg",
    title:"Projet 14"
   },

  {
    src:"image/image_021-78101453.jpeg",
    title:"Projet 15"
   },
   
   {
    src:"image/image_030-d14d7799.jpeg" ,
    title:"Projet 16"
  },

   {
    src:"image/images (1).jpeg" ,
    title:"Projet 17"
  },
   
  {
    src:"image/images (3).jpeg",
     title:"Projet 18"
   },
   
    {
      src:"image/images (4).jpeg",
       title:"Projet 19"
    } ,
   
  {  
    src:"image/images (2).jpeg" ,
    title:"20"},
  
   
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  updateLightbox();
}

function updateLightbox() {
  const image = images[currentIndex];
  document.getElementById("lightbox-img").src = image.src;
  document.getElementById("lightbox-title").textContent = image.title;
}


          // Message d'accepter les politiques et le confiientialité
    // Vérifier si l'utilisateur a déjà accepté
    if (!document.cookie.includes('acceptedCookies=true')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Lorsque l'utilisateur clique sur "Accepter"
    document.getElementById('accept-btn').addEventListener('click', function() {
        // Créer un cookie pour mémoriser l'acceptation pendant 30 jours
        document.cookie = "acceptedCookies=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
        document.getElementById('cookie-banner').style.display = 'none'; // Cacher la bannière
    });




/* button pour retourner en haut de la page */
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Affiche ou cache le bouton selon le scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    // Fonction pour remonter en haut
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Défilement fluide
      });
    }

    


  // statistique
     const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 200;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target >= 1000000
            ? "+" + (target / 1000000).toFixed(1) + "M"
            : target;
        }
      };
      updateCount();
    });
  }

  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!started && sectionTop < windowHeight - 100) {
      startCounters();
      started = true;
    }
  });



  const links = document.querySelectorAll('.nav-link'); // ou tes boutons menu
const overlay = document.getElementById('transitionOverlay');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // évite chargement immédiat
    const target = link.getAttribute('href');
    overlay.classList.add('show');
    setTimeout(() => {
      window.location.href = target;

}, 9000); // après 3s, va vers la page/section
  });
});



// projet 
 function filterProjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const projects = document.querySelectorAll('.project-box');
    projects.forEach(project => {
      const title = project.querySelector('h3').textContent.toLowerCase();
      const desc = project.querySelector('p').textContent.toLowerCase();
      if (title.includes(input) || desc.includes(input)) {
        project.style.display = '';
      } else {
        project.style.display = 'none';
      }
    });
  }





  
  let lastScroll = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add("header-visible");
    } else {
      header.classList.remove("header-visible");
    }

    lastScroll = currentScroll;
  });




  




