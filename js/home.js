$(document).ready(function(){
    $(".span1").click(function(){
        $(".call").slideToggle(500);

    });

});


$(document).ready(function(){
    $(".sk-chase").fadeOut(10000, function(){

        $(".loadingscreen").fadeOut(1000,function(){
            $(".bd").css("overflow-y" , "scroll");

        });

    });

});

$(document).ready(function(){

    $(".sa2").click(function(){

        $(".sa1").fadeToggle(1000);

    });

});



$(document).ready(function(){
    $("#servics").animate({"margin-top":"0px"},2000,function(){
        $("#servics").animate({"opacity":"1"},2000);

    });

});











var sec1 = document.querySelector(".sec5");
var sec2 = document.querySelector(".sec6");
var help = document.querySelector(".sec8");
var medo = document.querySelector(".sec4"); 
var medo2 = document.querySelector(".sec2"); 
var medo3 = document.querySelector(".sec1"); 



window.onscroll = function(){
    if(window.scrollY  >=  sec1.offsetTop - 100  && window.scrollY  <=  sec1.offsetTop + 450  )
{

    $(document).ready(function(){

        $("#show_now1").animate({"opacity":"1"},500, function(){
            $("#show_now2").animate({"opacity":"1"},500,function(){
                $("#show_now3").animate({"opacity":"1"},500,function(){
                    $("#show_now4").animate({"opacity":"1"},500,function(){
                        $("#show_now5").animate({"opacity":"1"},500,function(){
                            $("#show_now6").animate({"opacity":"1"},500,function(){
                                $("#show_now7").animate({"opacity":"1"},500,function(){
                                    $("#show_now8").animate({"opacity":"1"},500,function(){

                                    });
                                });
                            });
                        });

                    });
                });
            });

        });

    });

} else if(window.scrollY  >=  sec2.offsetTop - 620  && window.scrollY  <=  sec2.offsetTop + 650){

    console.log("hello");
        $(document).ready(function(){

                $("#bt_wow").css({"right":"0px"});

        });

  }else if(window.scrollY  >=  help.offsetTop -300    && window.scrollY  <=  help.offsetTop + 320)
  {

    $(document).ready(function(){
        $(".car1").animate({"opacity":"1"},2000);
            $("#dd").animate({"margin-top":"0px"},2000);
    



    });

}
else if(window.scrollY  >=  medo.offsetTop     && window.scrollY  <=  medo.offsetTop + 112900)
{
        $(document).ready(function(){

                $(".stop").css("display" , "block");

        });

}else
{
    $(document).ready(function(){


        $(".stop").css("display" , "none");
            
    });
}


}; 







