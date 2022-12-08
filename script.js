// sticky navbar while scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});


// navbar responsive 
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


    // typing text animation script
var typed = new Typed(".typing", {
    strings: ["Student", "Programmer", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});