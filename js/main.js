/* toggling navbar icon */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* scrool section active link */

let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });



    /* sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/* Scroll Reveal */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-image, heading', {origin: 'top'});
ScrollReveal().reveal(' .service-container, .project-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content, .about-image', {origin: 'left'});
ScrollReveal().reveal('.about-content', {origin: 'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Web Design and Development','Full Stack Development','Digital Brand Management','Virtual Assistance','E-commerce Management','Administrative Support'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


// pop-up section 

const showPopupButton = document.getElementById('show-popup');
const showPopupButton2 = document.getElementById('show-popup2');
const showPopupButton3 = document.getElementById('show-popup3');

const popupSection = document.getElementById('pop-up');
const closeButton = document.querySelector('.close-btn');  

function showPopup() {
  popupSection.classList.add('active');  
}

function hidePopup() {
  popupSection.classList.remove('active');  
}

showPopupButton.addEventListener('click', showPopup);
showPopupButton2.addEventListener('click', showPopup);
showPopupButton3.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);



