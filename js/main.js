

$(document).ready(function ()
{
    $("html").niceScroll();
     // Tool Option  --> open and close Gear  

    $('.gear-box').click(function (){

        $('.color-option').toggle(); 
       
    });

    // Color Option Toggle 

    var color = $('.color-option ul li ') ;  
    color
    .eq(0).css("background-color" , "#007bff").end() 
    .eq(1).css("background-color" , "#ca7709").end()  
    .eq(2).css("background-color" , "#b3136b").end()  
    .eq(3).css("background-color" , "#07910e").end() ;

    color.click(function()
    {
        console.log($(this).attr("data-value"));

        console.log( $("link[href*='Theam']")) ; 
         
        $("link[href*='Theam']").attr("href" , $(this).attr("data-value") ) ;
    });

    // scroll 
    var csroll = $('.scroll-top')  ;
    $(window).on("scroll" , function()
    {
        console.log($(this).scrollTop() ); 

        if($(this).scrollTop() > 700)   csroll.show() ; 
        else  csroll.hide()  ;


        csroll.on("click" , function()
        {
            $("html , body ").animate({scrollTop : 0} , 700) ; 
        } )
    });

}); 




// Loading Screen 

  $(window).on("load", function()
  {
      $("body").css("overflow" ,"auto"); 
      $('.loading-overlay ').hide()
      
  });
