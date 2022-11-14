$(document).ready(function(){

    $("#img-enme").animate({"right":"-189px"},2000, function(){

        $("#img-enme").animate({"right":"64px"},1000,function(){
            $("#img-enme").animate({"right":"0px"},1000);

        });

    });

});


$(document).ready(function(){

    $("#mov_e").animate({ "margin-top":"100px" ,"opacity":"0.5" },4000,function(){
        $("#mov_e").animate({ "opacity":"1" });

    });

});

$(document).ready(function(){
    $(".over").fadeOut(300);
});
$(document).ready(function(){
    $(".span1").click(function(){
        $(".call").slideToggle(500);

    });

});
