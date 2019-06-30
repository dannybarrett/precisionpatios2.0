const hamburger = document.querySelector('#hamburger');
const hiddenLinks = document.querySelector('#hidden-links');
const contactButton = document.querySelector('#contact-button');
const hiddenContact = document.querySelector('#hidden-contact');
const navbar = document.querySelector('nav');
const productsLinkPc = document.querySelector('#products-link-pc');
const productsLinkMob = document.querySelector('#products-link-mob');
const hiddenProductsPc = document.querySelector('#hidden-products-pc');
const hiddenProductsMob = document.querySelector('#hidden-products-mob');

const buttons = document.querySelectorAll('button');

let hamOpen = hiddenLinks.style.display === 'block';
let contactOpen = hiddenContact.style.display === 'block';
let productsOpenPc = hiddenProductsPc.style.display === 'block';
let productsOpenMob = hiddenProductsMob.style.display === 'block';

contactButton.addEventListener('click', event => {
   contactOpen = !contactOpen;
   
   if (contactOpen) {
       hiddenContact.style.display = 'block';
   } else {
       hiddenContact.style.display = 'none';
   }
});

productsLinkMob.addEventListener('click', event => {
    productsOpenMob = !productsOpenMob;
    
    if (productsOpenMob) {
        hiddenProductsMob.style.display = 'block';
    } else {
        hiddenProductsMob.style.display = 'none';
    }
});

productsLinkPc.addEventListener('click', event => {
    productsOpenPc = !productsOpenPc;

    if (productsOpenPc) {
        hiddenProductsPc.style.display = 'block';
    } else {
        hiddenProductsPc.style.display = 'none';
    }
});

hamburger.addEventListener('click', event => {
   hamOpen = !hamOpen;
   
   if (hamOpen) {
        hiddenLinks.style.display = 'block';
   } else {
        hiddenLinks.style.display = 'none';
   }
});

window.addEventListener('scroll', event => {
    if (window.scrollY > 20) {
        navbar.style.position = 'fixed';
        navbar.style.boxShadow = '0px 5px 10px black';
    } else {
        navbar.style.position = 'relative';
        navbar.style.boxShadow = '0 0 0 white';
        hiddenLinks.style.boxShadow = '0 0 0 white'; 
    }
});