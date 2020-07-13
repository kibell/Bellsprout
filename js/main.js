$(document).ready(function(){

"use strict";



$(window).scroll(function(){
const top = $(window).scrollTop();
if(top >=75){
    $("header").addClass('secondary');
}
else if($("header").hasClass('secondary')){
    $("header").removeClass('secondary')
}

})

 




})