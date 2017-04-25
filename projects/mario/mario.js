   var totalResult=0
var one=0,tow=0,three=0;

    $("#Goombas").click(function(){
        $("#btn").val($("#Goombas").val()*5);
        one = Number($("#btn").val());
        $("#total").val(one + tow + three);

    });

    $("#Bob-ombs").click(function(){
        $("#btn1").val($("#Bob-ombs").val()*7);
        tow = Number($("#btn1").val());
        $("#total").val(one + tow + three);

    });

    $("#Cheep-cheeps").click(function(){
        $("#btn2").val($("#Cheep-cheeps").val()*11);
        three = Number($("#btn2").val());
        $("#total").val(one + tow + three);

    });
