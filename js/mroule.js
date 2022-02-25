$(function(){
    //개개인적으로 수정
    /*
    1. 첫번째 당첨 메세지 출력 후 다시 start버튼을 클릭하면 
       해당 메세지는 사라져야함
    2. 룰렛이 회전할 때 start 버튼을 클릭할 수 있는 상태임 해당 버튼을
       지속적으로 눌러 버릴 경우가 생김 (unbind + $.fn확장함수)
    3. 3회 까지만 룰렛 사용할 수 있도록 합니다.
    */
    var $count = 3; //룰렛게임 카운터
    var $width = $(window).width();
    var $height = $("#roule_bk>img").height();
    $("#outline").css("height",$height+"px");

    let $data = ["500포인트","5,000포인트","꽝! 다음기회에!!","3,000포인트","2,000포인트","1,000포인트"];
    let $r = 0; //오브젝트 최초의 위치값
    $("#gamebtn").click(function(){
       
       var $random = Math.ceil(Math.random()*360);
       $r = $r + 1800;  //360=1바퀴
       var $msg = $.fn.rotate($r,$random);
       //console.log($data[$msg]);
       setTimeout(function(){
            $("#msg").slideDown(800);
            $("#msg").html($data[$msg]);
       },5500);

    });
    $.fn.rotate = function($r,$random){
        var $node = 0; //당첨결과 숫자
        if($random >=10 && $random <= 50){
            $node = 0;
        }
        else if($random >= 65 && $random <= 112){
            $node = 1;
        }
        else if($random >= 204 && $random <= 231){
            $node = 3;
        }
        else if($random >= 256 && $random <= 292){
            $node = 4;
        }
        else if($random >= 307 && $random <= 359){
            $node = 5;
        }
        else {
            $node = 2;
            $random = 162;
        }
        var $rotate = $r + $random;
        console.log($rotate);
        $("#gameboard").css("transform","rotate("+$rotate+"deg)");
        return $node;
    }


});