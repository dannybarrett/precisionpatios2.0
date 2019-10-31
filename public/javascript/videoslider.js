const trailerList = ['video/trailer.mp4', 'video/trailer2.mov', 'video/trailer3.mov', 
'video/trailer4.mov', 'video/trailer5.mov', 'video/trailer6.mp4', 'video/trailer7.mp4'];

const firstTrailer = 0;
let currentTrailer = firstTrailer;

const nextTrailerButton = document.querySelector('#next-video');
const lastTrailerButton = document.querySelector('#last-video');
const trailerSource = document.querySelector('#trailer-source').getAttribute('src');

lastTrailerButton.addEventListener('click', event => {
    currentTrailer--;

    if (currentTrailer < 0) {
        currentTrailer = trailerList.length - 1;
    }

    document.querySelector('#trailer-source').setAttribute('src', trailerList[currentTrailer]);
    document.querySelector('#trailer-video').load();
});

nextTrailerButton.addEventListener('click', event => {
    currentTrailer++;

    if (currentTrailer > trailerList.length - 1) {
        currentTrailer = 0;
    }

    console.log('Current trailer', currentTrailer);

    document.querySelector('#trailer-source').setAttribute('src', trailerList[currentTrailer]);
    document.querySelector('#trailer-video').load();
    console.log(document.querySelector('#trailer-source').getAttribute('src'));
});