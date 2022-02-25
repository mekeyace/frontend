$(function(){
    let $data;
    let $d;
    $.ajax({
        url:"../shop1/banner/banner.json?v=1",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($data){
            $.fn.banload($data);
        },
        error:function(){
            console.log("통신불량");
        }
    });

var $timer;
var $timer2;
var $f = 0;
var $node = 0;
var $z = 0;
var $check = "yes";
    $.fn.banload = function($data){
        $("#bandiv").append("<label class='disc' id='disc'><ul class='discul' id='discul'></ul></label>");
        $.map($data.banners,function($a,$b){
            $("#bandiv").append("<span>\
                <div id='ban"+$b+"'>\
                <img src="+$a[0]+">\
                <ol class='bantext'  id='bantext"+$b+"'>\
                </ol></div></span>");

            $.map($data.banners[$b],function($aa,$bb){
                if($bb>0 && $bb<4){
                    $("#bantext"+$b+"").append("<li>"+$aa+"</li>");
                }

            });
            $("#bantext"+$b+"").append("<li><span>VIEW DETAIL<span></li>");
            $("#discul").append("<li>"+$data.banners[$b][4]+"</li>");
            $node = $("#bantext1>li").length;        
    });

    $.fn.toc = function(){
        var $ea = $("#discul>li").length;
        $("#discul>li").css("background-color","#fff");
        $("#discul>li").css("background-color","#fff");
        $("#discul>li").eq($z).css("background-color","#f2f2f2");
        $z++;
        if($z>=$ea){
            $z=0;
        }
        if($check=="yes"){
        $timer2 = setTimeout(function(){ clearTimeout($timer2); $.fn.toc(); },8000);
        }
    }

    $.fn.tic = function(){
        $("#bandiv>span").eq($f).stop().fadeIn(1500);
        var $w = 0;
        while($w<$node-1){
            $("#bantext"+$f+">li").eq($w).delay(2000*$w).animate({
                "opacity":"1",
                "left":"0"
            },2000);
            $w++;
        }
        
        $f++;
        if($f>2){
            $f=0;
        }
        $("#bandiv>span").eq($f).stop().fadeOut(1500);
    
        var $w = 0;
        while($w<$node-1){
        $("#bantext"+$f+">li").eq($w).css({
            "opacity":"0",
            "left":"-200px"
        });
        $w++;
        }
        if($check=="yes"){
        $timer = setTimeout(function(){
            clearTimeout($timer);
            $.fn.tic();
        },8000);
        }   
    }
   
    $("#discul>li").bind({
        "click":function(){
            var $l = $(this).index();
            $f = $l;
            $z = $l;
            clearTimeout($timer);
            clearTimeout($timer2);
            $check="no";
            $.fn.tic();
            $.fn.toc();
            
        },
        "mouseleave":function(){
            if($check=="no"){
            $check="yes";
            $.fn.toc();
            }
        }

    });
        $.fn.tic();
        $.fn.toc();
    }

});