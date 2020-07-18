
"use strict";



// $(window).scroll(function(){
// const top = $(window).scrollTop();
// if(top >=75){
//     $("header").addClass('secondary');
// }
// else if($("header").hasClass('secondary')){
//     $("header").removeClass('secondary')
// }

// })


// })

const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
})

//scroll reveal

window.sr =  ScrollReveal();

sr.reveal('.animate-left', {

    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300

})



sr.reveal('.animate-top', {

    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600

})

sr.reveal('.animate-bottom', {

    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600

})

