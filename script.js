// ============================
// TYPING ANIMATION
// ============================

const texts = [
  "Inovasi, Kolaborasi, dan Transformasi Pendidikan",
  "Research • Innovation • Education",
  "Membangun Pendidikan Berbasis Data",
  "Kolaborasi untuk Masa Depan Pendidikan"
];

let speed = 70;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typed = document.getElementById("typed");

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {
    typed.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typed.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? 40 : speed
  );
}

typeEffect();


// ============================
// DARK MODE TOGGLE
// ============================

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("theme");

if(savedTheme === "light"){
  document.body.classList.add("light");
  themeToggle.innerHTML = "☀️";
}

themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "light"
    );

    if(
      document.body.classList.contains(
        "light"
      )
    ){
      localStorage.setItem(
        "theme",
        "light"
      );

      themeToggle.innerHTML =
        "☀️";

    } else {

      localStorage.setItem(
        "theme",
        "dark"
      );

      themeToggle.innerHTML =
        "🌙";
    }
  }
);


// ============================
// SCROLL REVEAL
// ============================

const reveals =
  document.querySelectorAll(
    ".reveal"
  );

function revealElements(){

  const trigger =
    window.innerHeight * 0.85;

  reveals.forEach(item => {

    const top =
      item.getBoundingClientRect().top;

    if(top < trigger){
      item.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();


// ============================
// VANILLA TILT
// ============================

VanillaTilt.init(
  document.querySelectorAll(".tilt"),
  {
    max:15,
    speed:500,
    glare:true,
    "max-glare":0.2,
    scale:1.03
  }
);


// ============================
// PARALLAX EFFECT
// ============================

window.addEventListener(
  "scroll",
  () => {

    const scrollY =
      window.scrollY;

    const blob1 =
      document.querySelector(
        ".blob1"
      );

    const blob2 =
      document.querySelector(
        ".blob2"
      );

    const blob3 =
      document.querySelector(
        ".blob3"
      );

    blob1.style.transform =
      `translateY(${scrollY * 0.12}px)`;

    blob2.style.transform =
      `translateY(${
        scrollY * -0.08
      }px)`;

    blob3.style.transform =
      `translateY(${
        scrollY * 0.05
      }px)`;

  }
);


// ============================
// NAVBAR EFFECT
// ============================

const header =
  document.querySelector(
    ".header"
  );

window.addEventListener(
  "scroll",
  () => {

    if(window.scrollY > 80){

      header.style.background =
        "rgba(10,10,25,.55)";

      header.style.backdropFilter =
        "blur(25px)";

      header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.15)";

    } else {

      header.style.background =
        "rgba(255,255,255,.04)";

      header.style.boxShadow =
        "none";
    }
  }
);


// ============================
// SMOOTH SCROLL
// ============================

document
.querySelectorAll(
  'a[href^="#"]'
)
.forEach(anchor => {

  anchor.addEventListener(
    "click",
    function(e){

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if(target){

        window.scrollTo({
          top:
            target.offsetTop - 70,
          behavior:"smooth"
        });
      }
    }
  );
});


// ============================
// HERO FLOAT EFFECT
// ============================

const heroCard =
  document.querySelector(
    ".hero-card"
  );

window.addEventListener(
  "mousemove",
  (e)=>{

    const x =
      (window.innerWidth / 2
      - e.pageX) / 40;

    const y =
      (window.innerHeight / 2
      - e.pageY) / 40;

    heroCard.style.transform =
      `translateY(-8px)
       rotateY(${x}deg)
       rotateX(${-y}deg)`;
  }
);


// ============================
// LOADING ANIMATION
// ============================

window.addEventListener(
  "load",
  ()=>{

    document.body.style.opacity =
      "1";

    document.body.style.transition =
      "opacity .8s ease";
  }
);

document.body.style.opacity = "0";


// ============================
// TIMELINE ANIMATION
// ============================

const timelineItems =
  document.querySelectorAll(
    ".timeline-item"
  );

window.addEventListener(
  "scroll",
  ()=>{

    timelineItems.forEach(item=>{

      const top =
        item.getBoundingClientRect()
        .top;

      if(top < window.innerHeight - 100){

        item.style.opacity = "1";
        item.style.transform =
          "translateY(0)";
      }
    });
  }
);

timelineItems.forEach(item=>{

  item.style.opacity = "0";
  item.style.transform =
    "translateY(40px)";
  item.style.transition =
    ".9s ease";
});

// ======================
// MOBILE NAVIGATION FIX
// ======================

const menuBtn =
document.getElementById(
"menuToggle"
);

const navMenu =
document.querySelector(
".nav-menu"
);

const navOverlay =
document.getElementById(
"navOverlay"
);

function openMenu(){

  navMenu.classList.add("active");
  menuBtn.classList.add("active");
  navOverlay.classList.add("active");

  document.body.classList.add(
    "menu-open"
  );
}

function closeMenu(){

  navMenu.classList.remove("active");
  menuBtn.classList.remove("active");
  navOverlay.classList.remove("active");

  document.body.classList.remove(
    "menu-open"
  );
}

menuBtn.addEventListener(
"click",
function(){

  if(navMenu.classList.contains("active")){
    closeMenu();
  } else {
    openMenu();
  }
});

navOverlay.addEventListener(
  "click",
  closeMenu
);


// AUTO CLOSE

document
.querySelectorAll(
".nav-menu a"
)
.forEach(link=>{

  link.addEventListener(
  "click",
  closeMenu
  );

});
