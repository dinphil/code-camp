// Navbar scrolling using JQuery animations

$(document).ready(function(){

    $('#git-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#git-section").offset().top
        }, 500);
        
    }); 

    $('#jquery-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#jquery-section").offset().top
        }, 500);
        
    }); 
    
});
