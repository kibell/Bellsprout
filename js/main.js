$(document).ready(function(){

"use strict";
$('#slider-carousel').carouFredSel({
    responsive:true,
    width:'100%',
    circular:true,
    scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
    },
    auto:true,
    items:{
        visible:{
            min:1,
            max:1
        },
    height:"variable"
    },
    pagination:{
        container:".sliderpager",
        pageAnchorBuilder:false
    }

});


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