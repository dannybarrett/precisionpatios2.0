let mainImage = document.querySelector('#main-image');
let thumbnails = document.querySelectorAll('.thumbnail');


thumbnails.forEach(thumbnail => {
   thumbnail.addEventListener('click', () => {
       mainImage.setAttribute('src', thumbnail.getAttribute('src'));
       changeFocus();
   });
});

const changeFocus = () => {
    thumbnails.forEach(thumbnail => {
       if (thumbnail.getAttribute('src') === mainImage.getAttribute('src')) {
           thumbnail.style.opacity = '0.7';
       }  else {
           thumbnail.style.opacity = '1';
       }
    });
};


changeFocus();