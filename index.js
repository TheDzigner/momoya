const openMenu = document.querySelector('.open-menu-btn');
const nav = document.querySelector('header nav');

const navBtns = nav.querySelectorAll('ul li');

let Activeindex = 0

// add active class when cliked a nav link 

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