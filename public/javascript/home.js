const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('animated', 'pulse');

        button.addEventListener('animationend', () => {

        });
    });
});