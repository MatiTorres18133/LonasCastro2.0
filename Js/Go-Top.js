$(document).ready(function(){
$('.Up').hide();

$(window).scroll(function(){
    if($(this).scrollTop()>100 ){
        $('.Up').fadeIn('1000')
    }else{
        $('.Up').fadeOut('1000')
    }
});


$('.Up').click(function(){

    $('body, html').animate({
        scrollTop:  0

    })

})
});

