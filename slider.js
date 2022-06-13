const btnNext = document.querySelector('#next');
const btnBack = document.querySelector('#back');

let photos = ['img/slider/tarte/1.avif', 'img/slider/tarte/2.avif', 'img/slider/tarte/3.avif', 'img/slider/tarte/4.avif']

let i = 0;


btnNext.addEventListener('click', ()=> {
    i++;
    if(i > photos.length - 1){
        i = 0;
    }
    document.querySelector('#pictures').src = photos[i];
})

btnBack.addEventListener('click', ()=> {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
})