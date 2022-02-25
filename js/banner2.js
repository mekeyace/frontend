$(function(){
    let $json;
    let $timer;
    let $no=0;
    let $stop="yes";
    let $n;
$.ajax({
    url:"../shop1/banner/banner.json",
    Cache:false,
    type:"GET",
    dataType:"JSON",
    
    success:function ($a1,$b1) {
        //console.log($a1);
        $json = $a1;
        $.fn.bn_data($a1);
    },
    error:function () {
        console.log("통신오류");
    }
});

$.fn.bn_data = function($bn_data){
  
    $($bn_data["banners"]).each(function($aa1,$bb1){
        var $div = "<span class='span_banner'></span>";
        $("#banner").append($div);
        var $img="<label><img src="+$bb1[0]+"></label>";
        $("#banner>span").eq($aa1).append($img);
        $("#banner_btn").append("<li>"+$bn_data["banners"][$aa1][4]+"</li>");
        var $ul="<ul></ul>";
        $("#banner > span").eq($aa1).append($ul);      
        $($bn_data["banners"][$aa1]).each(function($b1,$b2){
            if($b1>0 && $b1<=3){
             $("#banner>span:eq("+$aa1+")>ul").eq(0).append("<li>"+$b2+"</li>");
            if($b1==3){
             $("#banner>span:eq("+$aa1+")>ul").eq(0).append("<li>VIEW DETAIL</li>");
            }
          }
       });        
    });
    $.fn.texts(); 
    $("#banner_btn > li").click(function(){
        $n = $(this).index();
        $no = $n;
        clearTimeout($timer);
        $stop="no";
        $.fn.texts();
    });
       
}

$.fn.texts = function(){
    $("#banner > span > ul > li").css({
        "left":"-200px",
        "poacity":0
    });
    
    $("#banner>span").eq($no).fadeIn();
    $("#banner_btn>li").eq($no).css({
        "background-color":"#F2F2F2",
        "border":0
    });

    var $banner_ea = $json["banners"].length;

    var $ea = $json["banners"][0].length;
    var $w = 0;
        while($w < $ea-1){
            $("#banner>span:eq("+$no+")>ul>li").eq($w).delay($w*100).animate({
                    "left":0,
                    "opacity":1
            },500);
            $w++;
        }
    
        $no++;
        if($no >= $banner_ea){
            $no = 0;
        }
        $("#banner_btn>li").eq($no).css({
            "background-color":"#FFFFFF",
            "border":"1px solid #F2F2F2"
        });
        $("#banner>span").eq($no).fadeOut();
        if($stop=="yes"){
            $timer = setTimeout($.fn.texts,8000);
        }
    
    }
    $("#banner").mouseleave(function(){
        if($stop=="no"){
        $no = $n;
        $stop = "yes";
        $.fn.texts();
        }
        
    });
    
});