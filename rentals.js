$(document).ready(function(){
    //function for navigation menu
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    //image slider for home page
    var slideIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = $(".img-home");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) 
    {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2500); // Change image every 2.5 seconds
    }
    //image slider for home page ends here
    
});