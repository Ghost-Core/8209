$(document).ready(function( ) {
    $("h1").text('LAB 11');

    $("input[type='button']").addClass("button");
    
    $("#header").html("<h3>Working with jQuery</h3>");

    $("input[type='button']").each(function(index, element){
        $(element).addClass("btn-background");
        });

    $("#buttons").addClass("red-border");
    
    $("p").each(function(index, element){
            $(element).addClass("blue");
        });

    $("#first").on("click", function(){
        $("#para1").addClass("green-border");
    });

    $("#last").on("click", function(){
        $("#para5").addClass("orange-border");
    });

    $("#prev").on("click", function(){
        $("#para3").prev().addClass("purple-border");
    }); 

    $("#next").on("click", function(){
        $("#para2").next().addClass("yellow-border");
    }); 

    $("#remove").on("click", function(){
        $("#footer").remove();
    });

});
