$(function(){
    let $data = ["500포인트","5,000포인트","꽝! 다음 기회에","3,000포인트","2,000포인트","1,000포인트"];
    let $r = 0; 

    $("#gamebtn").click(function(){
        $("#msg").css("display","none");
        
        var $random = Math.ceil(Math.random()*360);
        $r = $r + 1800; 
        var $msg = $.fn.rotate($r,$random);

        setTimeout(function(){
            $("#msg").slideDown(800);
            $("#msg").html($data[$msg]);
        },5500);
    });

    $.fn.rotate = function($r,$random){
        var $node = 0; //당첨결과 숫자

        if($random >= 10 && $random <=50){
            $node = 0;
        }else if($random >= 65 && $random <=110){
            $node = 1;
        }else if($random >=190 && $random <=230){
            $node = 3;
        }else if($random >= 250 && $random <=290){
            $node = 4;
        }else if($random >=310 && $random <=350){
            $node = 5;
        }else{
            $node = 2;
            $random = 162;
        }
        

        var $rotate = $r + $random;
    $('#gameboard').css('transform', 'rotate(' + $rotate + 'deg)');
    return $node;
    }
});