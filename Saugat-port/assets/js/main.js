/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Graphic <br> Designer","Youtuber","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
});

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- FORM VALIDATION ----- */
const form = document.querySelector('.form-control');
form.addEventListener('submit', function(event) {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/* ----- SCROLL REVEAL ----- */
ScrollReveal().reveal('.featured-text, .featured-image', {
    delay: 300,
    duration: 1000,
    reset: false,
    origin: 'left',
    distance: '50px'
});

ScrollReveal().reveal('.about-info, .skills-box', {
    delay: 300,
    duration: 1000,
    reset: false,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.project-container', {
    delay: 300,
    duration: 1000,
    reset: false,
    origin: 'right',
    distance: '50px'
});

ScrollReveal().reveal('.contact-info, .form-control', {
    delay: 300,
    duration: 1000,
    reset: false,
    origin: 'left',
    distance: '50px'
});
