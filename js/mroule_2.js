$(function(){
    var $width = $(window).width();
    var $height = $("#roule_bk>img").height();
    console.log($width);
    console.log($height);
    $("#outline").css("height",$height+"px");
    $("#gamebtn").click(function(){
        console.log("test");
    });

});