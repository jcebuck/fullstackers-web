// The code on line 2 is an exception. You should not use jQuery to style your pages!
$("body").css("backgroundColor", "lightgrey");

// OPTION 2 - SHORT VERSION CODE
$(".question").click( function() {
    $(this).next().fadeToggle("fast");
    $(this).children().toggleClass("collapse");
});


/*

OPTION 1 - FULL VERSION CODE
$("#q1").click( function() {
    $("#a1").fadeToggle("fast");
    $("#arrow1-down, #arrow1-up").toggleClass("collapse");
});

$("#q2").click( function() {
    $("#a2").fadeToggle("fast");
    $("#arrow2-down, #arrow2-up").toggleClass("collapse");
});

$("#q3").click( function() {
    $("#a3").fadeToggle("fast");
    $("#arrow3-down, #arrow3-up").toggleClass("collapse");
});

*/










