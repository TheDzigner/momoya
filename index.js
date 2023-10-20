const openMenu = document.querySelector('.open-menu-btn');
const nav = document.querySelector('header nav');
const navBtns = nav.querySelectorAll('ul li');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slider .slide');
const slidesLenght = slides.length -1

let index = 0




nextBtn.addEventListener('click', () => {
    slides[index].classList.remove('active')
    index < slidesLenght ? index++ : index = 0
    slides[index].classList.add('active')

})

prevBtn.addEventListener('click', () => {
    slides[index].classList.remove('active');
    index > 0 ? index-- : index = slidesLenght
    slides[index].classList.add('active');
})




let Activeindex = 0


navBtns.forEach((btn,index) => {
    
    btn.addEventListener('click',function(e){
     navBtns[Activeindex].classList.remove('active');
     Activeindex = index 
     navBtns[Activeindex].classList.add('active');
   
   })
})

openMenu.addEventListener('click', () => {
  
    // check if the nav has the classList of active ,and add the animation to the open menu button
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        openMenu.classList.remove('active')
    } else {
        nav.classList.add('active');
        openMenu.classList.add('active')
    } 
  
});


// remove the preloader when DOM content has loaded 

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('ended');
    setTimeout(() => {
        preloader.remove();
    }, 3000);
});



