$(function(){
    let $data;
    $.ajax({
        url:"./menu/menu.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($data){
            $.fn.menus($data);
        },
        error:function(){
            console.log("통신오류");
        }
    });
    /*
    $.fn.menus = function($data){

        $($data).each(function($a1,$a2){
            //HTML 대메뉴
            console.log($data[$a1]["menus"]);

            if($data[$a1]["cate"][0]!=""){  //소메뉴가 있을때만 작은 each가 작동함
                $($data[$a1]["cate"]).each(function($b1,$b2){
                        console.log("-"+$b2);
                });
            }

        });
    };
    */
    var $right_number = -1;
    $.fn.menus = function($datas){
        $.each($datas,function($a1,$a2){
            var $big_menu = $datas[$a1]["menus"];
            var $li = "<li>"+$big_menu+"<ol>"+"</ol>"+"</li>";
            if($a1 <= 5){
                $("#left_menu").append($li);
            }
            else{
                $("#right_menu").append($li);
            }
            $.each($datas[$a1]["cate"],function($b1,$b2){
                var $li2 = "<li>"+$b2+"</li>";
                if($datas[$a1]["cate"].length > 1){
                if($a1 <= 5){
                    $("#left_menu > li:eq("+$a1+") > ol").append($li2);
                }
                else if($a1 >=6){
                    $right_number++;
                    $("#right_menu > li:eq("+$right_number+") > ol").append($li2);
                }
            }
            })
        })
        $("#left_menu > li").bind({
            "mouseenter":function(){
                var $a = $(this).index();
                $("#left_menu > li:eq("+$a+") > ol").eq(0).slideDown(1000);
                alert("test");
            },
            "mouseleave":function(){
                $("#left_menu > li > ol").slideUp(1000);
            }
        });
    }
});